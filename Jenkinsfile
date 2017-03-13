#!groovy

node {
  try {
    currentBuild.result = "SUCCESS"

    stage('Checkout source') {
      git branch: 'develop', credentialsId: 'coloseo', url: 'https://github.com/coloseo/react-boss.git'
    }

    gitCommit = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
    shortCommit = gitCommit.take(6)

    stage('Install node modules') {
      sh "sudo docker run --rm -v /share/jenkins_home/.cache/yarn:/root/.cache/yarn -v /share/jenkins_home/workspace/${JOB_NAME}:/code -w /code repo.coloseo.io/node:6.9.2-dev yarn install --pure-lockfile"
    }

    stage('Run unit test') {
      sh "sudo docker run --rm -v /share/jenkins_home/workspace/${JOB_NAME}:/code -w /code repo.coloseo.io/node:6.9.2-dev yarn run ci"
    }

    stage('Build app') {
      sh "sudo docker run --rm -v /share/jenkins_home/workspace/${JOB_NAME}:/code -w /code repo.coloseo.io/node:6.9.2-dev yarn run build"
    }

    stage('Build docker image') {
      sh "sudo docker build -t repo.coloseo.io/sparrow-boss:${shortCommit} ."
    }

    stage('Push docker image') {
      sh "sudo docker push repo.coloseo.io/sparrow-boss:${shortCommit}"
    }

    stage('Deploy stage') {
      sh "sed -i \"s/replace me/repo.coloseo.io\\/sparrow-boss:${shortCommit}/g\" deploy.json"
      sh "curl -i -X PUT -H 'Content-Type: application/json' -u marathon:Bxazd1er9Fw^ -d @deploy.json https://marathon.coloseo.io/v2/apps/sparrow/wechat/api"
    }

    stage('Slack notifaction') {
      slackSend color: 'good', message: "${JOB_NAME} build: ${currentBuild.result}", channel: "#general", teamDomain: "coloseo", token: "${slack_token}"
    }
  }

  catch (err) {
    currentBuild.result = "FAILURE"
    slackSend color: 'danger', message: "${JOB_NAME} build failure is here: ${env.BUILD_URL}", channel: "#general", teamDomain: "coloseo", token: "${slack_token}"
    throw err
  }
}

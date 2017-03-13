FROM hub.coloseo.io/nginx:mainline-alpine
MAINTAINER Ging.Wu <ging.wu@coloseo.cn>

COPY build /usr/share/nginx/html

import React, {Component} from 'react';
import './../assets/styles/news/list.css';
import Map from './../components/map';
class ScenicContainer extends Component {
  change(status, result) {
    console.log('定位信息', status, result);
  }
  render() {
    return (
      <Map address={"四川省成都市锦江区龙江路14号"} onChange={this.change}/>
    )
  }
}
export default ScenicContainer;

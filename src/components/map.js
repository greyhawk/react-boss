import React, {Component, PropTypes} from 'react';
export default class Map extends Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const self = this;
    const container = this.refs.map;
    var map = new window.AMap.Map(container, {
        resizeEnable: true,
        zoom: 12,
    });
    map.setFitView();
    const marker = new window.AMap.Marker({
        position: map.getCenter(),
        draggable: true,
        cursor: 'move',
        raiseOnDrag: true,
        map,
    });


    window.AMap.event.addListener(marker, 'dragend', (location) => {
      const geocoder = new window.AMap.Geocoder({
        radius: 1000,
        extensions: "all"
      });
      const lnglat = location.lnglat;
      geocoder.getAddress([lnglat.lat, lnglat.lng], (status, result) => {
        self.props.onChange(status, result);
      });
    }, (e) => {
      console.log('e', e);
    });

    map.plugin(["AMap.Geocoder", 'AMap.Geolocation'], function () {
      const geolocation = new window.AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new window.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      window.AMap.event.addListener(geolocation, 'complete', (location) => {
        marker.setPosition(location.position);
      });
      window.AMap.event.addListener(geolocation, 'error', (e) => {
        console.log('error', e);
      });
      const address = self.props.address;
      if (address) {
        const geocoder = new window.AMap.Geocoder({
          city: "010",
          radius: 1000
        });
        geocoder.getLocation(address, function(status, result) {
          self.props.onChange(status, result);
        });
      }

  });
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className='md-map' ref='map' style={{height: 500}}></div>
    );
  }
}

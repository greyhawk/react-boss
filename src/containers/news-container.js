import React, {Component} from 'react';
import OrderList from './../components/news-list';
import './../assets/styles/news/list.css';
class HomeContainer extends Component {
  render() {
    return (
      <div className='page-order'>
        <OrderList/>
      </div>
    );
  }
}
export default HomeContainer;

import React, {Component} from 'react';
import OrderList from './../components/order-list';
import './../assets/styles/order-list.css';
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

import React, {Component} from 'react';
import OrderList from './../components/order-list';
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

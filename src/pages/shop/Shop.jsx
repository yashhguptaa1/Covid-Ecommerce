import React,{Component}from 'react';

import SHOP_DATA from './shop.data.js';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className='shop-page'>
        Shop Page
      </div>
    );
  }
}

export default ShopPage;
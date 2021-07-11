import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

//In root-reducer.jsx
//we have named 
//  cart: cartReducer
// this means all cartReducer will be denoted by cart

//in cart.reducer.js we have cartItems[] in initial state
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
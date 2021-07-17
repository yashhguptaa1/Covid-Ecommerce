import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  //signup on stripe & get this from stripe dashboard 
  const publishableKey = 'pk_test_51JE3MISJC2g5R2bRpTg6zvMHx4Rkynv8k3iDd2FQab601Jpcs7LygtQaw4K7U0XA6kUDIqXD8VTptCEuljY1sxIv00gadQXuLM';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

//Check all props that can be passed on
//https://github.com/azmenak/react-stripe-checkout

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}//dollar value
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}//on success callback triggers when submit
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
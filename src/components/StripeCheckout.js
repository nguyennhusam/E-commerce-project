// import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
// import { loadStripe } from '@stripe/stripe-js'
// import {
//   CardElement,
//   useStripe,
//   Elements,
//   useElements,
// } from '@stripe/react-stripe-js'
// import axios from 'axios'
// import { useCartContext } from '../context/cart_context'
// import { useUserContext } from '../context/user_context'
// import { formatPrice } from '../utils/helpers'
// import { useHistory } from 'react-router-dom'

const CheckoutForm = () => {
  const { clearCart } = useCartContext();
  return <>
    <div className='continue'>
      <h4>Thank you for choosing us!</h4>
      <Link to='/checkout' className="btn" onClick={() => clearCart()}>
        Continue shoppping
      </Link>
    </div>
  </>

}

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  .continue {
    text-align: center;
  }
`;
export default StripeCheckout

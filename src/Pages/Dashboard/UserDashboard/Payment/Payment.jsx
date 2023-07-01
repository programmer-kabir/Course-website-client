import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import useSelected from '../../../../Component/Hooks/useSelected';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
  const [bookData] = useSelected()
  const total = bookData.reduce((sum, item) => sum+item.price,0)
  const price = parseFloat(total.toFixed(2))
  
  return (
    <div>
      <Elements stripe={stripePromise}>
      <CheckOut bookData={bookData} price={price}/>
    </Elements>
    </div>
  );
};

export default Payment;

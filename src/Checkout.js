import React from 'react'; 
import './Checkout.css'; 
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

  const[{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://advertisingweek.com/wp-content/uploads/2021/06/169cart-1170x600.jpg'
          alt='checkimage'
        />
        <div>
          <h3>Hello, {user?.email}</h3>
<h2 className='checkout__title'>Your Basket</h2>

{basket.map(item => (
  <CheckoutProduct
  title={item.title}
  image={item.image}
  price={item.price}
  rating={item.rating}

  />
))}



{/* Checkout Product*/}

        </div>
      </div>

      <div className="checkouta__right">

        <Subtotal />
    

      </div>
    </div>
  );
}

export default Checkout
import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({title, image, price, rating}) {
  const [ { basket }, dispatch] = useStateValue ();  



  const addToBasket = () => {
//dispatch item to data layer
dispatch ({

type: 'ADD_TO_BASKET', 
item: {
  title: title, 
  image: image, 
  price: price, 
  rating: rating, 
},


});

  };
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>R</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>

      <img
        src={image}
        alt='productimage'
      />

      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product
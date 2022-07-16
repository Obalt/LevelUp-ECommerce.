import { Link } from '@mui/material';
import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      
      <div className='home__container'>
        <img
          className='home__image'
          src='https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462434_960_720.jpg'
          alt='backimage'
        />

        <div className='home__row'>
          <Product
            title='Digital Fan Heater'
            price={1198.54}
            image='https://www.tevo.co.za/wp-content/uploads/2020/11/BennettRead_DigitalTowerFanHeater-6009710603253-WebImage-02.jpg'
            rating={4}
          />
          <Product
            title='JBL Vibe Bluetooth Earphones'
            price={1983.44}
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyl4nIlnTG9AlAhgkQfZSlBm7lyCsy94cmMW9LkFbAfDyBkB5OtHjHwhnkSY4Br7gEnQQ&usqp=CAU'
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
            title='Luxury Baby Stroller'
            price={33498.81}
            image='https://cdn.luxatic.com/wp-content/uploads/2019/02/Silver-Cross-Kensington.jpg'
            rating={5}
          />

          <Product
            title='Pioneer CDJ 3000'
            price={56990.0}
            image='https://musictech.com/wp-content/uploads/2020/11/CDJ-3000-HERO-WHITE@1400x1050.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            title='Apple Macbook Air 13-inch M1 8-Core 512GB'
            price={23512.0}
            image='https://cdn.shopify.com/s/files/1/1864/5203/products/silair.001_377x_2x.progressive_846bcdbc-7c5e-499d-8ae1-82810efdd4aa_500x.jpg?v=1635939797'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home
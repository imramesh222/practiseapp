import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // Auto-slide interval in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className='slide'>
        <div className='item'>
          <img src='/images/p1.jpg' alt='Slide 1' />
        </div>
      </div>
      <div className='slide'>
        <div className='item'>
          <img src='/images/p3.jpg' alt='Slide 3' />
        </div>
      </div>
      <div className='slide'>
        <div className='item'>
          <img src='/images/b1.jpg' alt='Slide 5' />
        </div>
      </div>
      <div className='slide'>
        <div className='item'>
          <img src='/images/p2.jpg' alt='Slide 2' />
        </div>
      </div>
      <div className='slide'>
      <div className='item'>
          <img src='/images/b2.jpg' alt='Slide 6' />
        </div>
      </div>
      <div className='slide'>
      <div className='item'>
          <img src='/images/p4.jpg' alt='Slide 4' />
        </div>
      </div>

    </Slider>
  );
}

export default SimpleSlider;

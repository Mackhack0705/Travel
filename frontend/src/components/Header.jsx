import React from 'react'
import "../style/header.css"
import {MEDIA_SIZES} from '../Constants/constants';

const Header = () => {
  const imageComponent = MEDIA_SIZES.map(({size}) => {
    if (size === 525) {
      return <source
        media={`(max-width: ${size}px)`}
        srcSet={`https://res.cloudinary.com/dj9vccr8n/image/upload/v1777803162/mobile-header-image_xm9pa6.png`}
        key={size}
      />
    }
    return <source
      media={`(max-width: ${size}px)`}
      srcSet={`https://res.cloudinary.com/dj9vccr8n/image/upload/v1777802499/header-image_phhjzf.jpg`}
      key={size}
    />
  })
  return (
    <div className='header-section'>
      <picture>
        {imageComponent}
        <img
          src={`https://res.cloudinary.com/dj9vccr8n/image/upload/v1777802499/header-image_phhjzf.jpg`}
          alt="Header"
          className='header-image'
          />
      </picture>
      <div className='overlay-text'>
        <h1 className='header-title'>Explore the world with us</h1>
      </div>
    </div>
  )
}

export default Header

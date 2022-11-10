import { Container, Typography } from '@mui/material'
import React from 'react'
import './privacy.css'
import { useMediaQuery } from 'react-responsive'
import mock from '../../libs/image/mock.jpg'

const Privacy = () => {
  const isTabletOrMobile = useMediaQuery({ query:'(max-width: 800px)'})
  const size = isTabletOrMobile ? 'sm' : 'md'
  return (
    <Container maxWidth={size}>
      <div className='slide-right'>
        <Typography variant='h4'>Keeping Quickvids a safe and supportive place</Typography>
      </div>
      <div className='image-container'>
        <img className="mockimg" src={mock} alt="img"/>
      </div>
      <div className='slide-left'>
        <Typography variant='h5'>
          We’re committed to building a community where everyone feels supported. Learn how to stay safe so you can express yourself freely and explore your interests.
        </Typography>
      </div>
    </Container>
  )
}

export default Privacy
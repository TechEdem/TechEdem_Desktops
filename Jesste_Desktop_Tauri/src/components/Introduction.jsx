import React from 'react'
import styled from 'styled-components'
import IntroPage from '../assets/IntroPage.mp4'
import Navbar from './Navbar'
import IntroDescription from './IntroDescription'

function Introduction() {
  
  return (
    <Container>

      <div class="introduction">
        <video src={IntroPage} autoPlay loop muted/>

        <div className='description'>
        <Navbar />
        <IntroDescription />
        </div>
        
      </div>

    </Container>
  )
}

const Container = styled.div`
  .introduction {
    display: flex;
  }
  video {
    object-fit: cover;
  }
  .description{
    position: absolute;
    background-color:  rgba(0, 0, 0, 0.57);
  }
  
`

export default Introduction

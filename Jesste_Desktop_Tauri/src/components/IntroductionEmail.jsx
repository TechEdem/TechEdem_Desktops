import React from 'react'
import styled from 'styled-components'
import Background from '../assets/Background.png'

function IntroductionEmail() {
  return (
    <Container>
      <div className= "email_background">
      <div className='main_email_background'>
      
      </div>   
      </div>
    </Container>
  )
}
const Container = styled.div`
padding-top: 15%;
  .email_background{
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 80vh;
    width: 100%;
  }
  .main_email_background{
    height: 100%;
    width: 100%;
    background: rgba(23, 23, 23, 0.65);
  }
`

export default IntroductionEmail

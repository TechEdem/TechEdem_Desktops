import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import First from '../assets/First.png'
import Second from '../assets/Second.png'
import Third from '../assets/Third.png'
import Forth from '../assets/Forth.png'
import Fifth from '../assets/Fifth.png'
import Sixth from '../assets/Sixth.png'
import Seventh from '../assets/Seventh.png'
import Eight from '../assets/Eight.png'
import Fade from 'react-reveal'

function Projects() {


  
  return (
    <Container>
      <h1>Our Projects</h1>
      <Typed strings={["Our Special Projects"]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
      <div className='main_project'>

        <Fade top duration={1000} distance="40px">
          <img src={First} alt='' className='first' />
        </Fade>
      
        <Fade buttom duration={1000} distance="40px">
      <div className='projects'>
  
          <img src={Second} alt=''  />

          <img src={Third} alt=''  />

          <img src={Forth} alt=''  />

          <img src={Fifth} alt=''  />
        
          <img src={Sixth} alt=''  />

          <img src={Seventh} alt=''  />
      
    </div>
    </Fade>


      <Fade top duration={1000} distance="40px">
          <img src={Eight} alt='' className='eight'  />   
      </Fade>

      </div>
    </Container>
  )
}

const Container = styled.div`
  h1{
    font-size: 3rem;
    text-align: center;
    padding-top: 6rem;
    padding-buttom: 6rem;
    color: #E3CD5A;
    font-weight: 500;
  }
  .typed{
    font-size: 3rem;
    text-align: center;
    font-weight: 700;
    padding-left: 35%;
  }
  .main_project{
    display: flex;
    padding: 3% 17%;
    justify-content: space-between;
  }
  .first{
    width: 300px;
    height: 585px;
  }
  .overlay_eight{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: gray;
    width: 100%;
    height: 100%;
  }
  .projects{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 2%;
  }
  .projects img{
    width: 200px;
    height: 160px;
    padding: 3% 4.5% 1% 3.5%;
    
  }
  .eight{
    width: 300px;
    height: 585px;
  }
  .overlay_eight{
    position: absolute;
   
    width: 100%;
    height: 100%;
    background-color: gray;
    width: 100%;
    height: 100%;
  }
  
`
export default Projects

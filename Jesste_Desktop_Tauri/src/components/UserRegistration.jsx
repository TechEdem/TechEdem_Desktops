import React, {useState} from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

function Registration() {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    return setClick(true);
  };
  const handleLeaveClick = () => {
    setClick(false);
  };

  return (
    <Container>
      <Fade>
        <div className='login_details'>
        <Typed strings={["Login"]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
        </div> 
        <form>
        <div className='info'>
            <label for='Username'>Username:</label>
            <br />
            <input type='email' name='username' id='username' placeholder='Enter username'/>
        </div>
        <div className='info'>
            <label for='Username'>Password:</label>
            <br />
            <input type='password' name='password' id='password' placeholder='Enter password'/>
        </div>
        <div className='button'>
            <button>Sign In</button>
        </div>

        <div className='sign'>
          <div className='main_sign'>
            <h3>New to Jesste Construction? </h3>
            <div className='link' onClick={handleClick}>Sign Up</div>

            
            {click && (
              
              <div className='signup_details'>
                  <div className='login_details'>
                  <Typed strings={["Register"]} typeSpeed = {80} backSpeed={80} loop  className='typed_sign'/>
                  </div> 
                  <form>
                  <div className='info'>
                      <label for='Username'>Fullname:</label>
                      <br />
                      <input type='text' name='username' id='username' placeholder='Enter username'/>
                  </div>
                  <div className='info'>
                      <label for='Username'>Email:</label>
                      <br />
                      <input type='email' name='password' id='password' placeholder='Enter password'/>
                  </div>
                  <div className='info'>
                      <label for='Username'>Password:</label>
                      <br />
                      <input type='password' name='password' id='password' placeholder='Enter password'/>
                  </div>
                  <div className='button'>
                      <button>Sign Up</button>
                  </div>
                  <div className='sign'>
                    <div className='main_signup_sign'>
                      <h3>Already in Jesste construction? </h3>
                      <div className='link' onClick={handleLeaveClick}>Sign In</div>
                      </div>
                    <a href='https://stackoverflow.com/'>Need help?</a>
                  </div>
                  </form>
              </div>
            )

            }
          </div>
          <a href='https://stackoverflow.com/'>Need help?</a>
        </div>

        <div className='admin_link'>
          <Link to='/admin'className='admin_main_link'>Click this link to login, if you are an admin</Link>
        </div>
        </form>  
      </Fade>
    </Container>
  )
}

const Container = styled.div`
position: relative;

.login_details{
  padding: 5% 37%;
  width: 100%;
}
.typed{
    padding: 5%;
    font-size: 50px;
    font-weight: bold;
    background: linear-gradient(97.24deg, #f4ca98 50.37%, rgba(243, 194, 95, 0.233) 113.02%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent; 
}
.info{
  padding: 2% 9%;
}
label{
  padding: 2% 0%;
}
input{
  width: 470px;
  height: 60px;
  border-radius: 10px;
  border: 3px solid rgba(154, 154, 154, 0.404);
  padding-left: 5%;
}
.button{
    padding: 6% 9%;
}
button{
  width: 500px;
  height: 60px;
  font-size: 25px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 228, 196, 0.866);
}
button:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
}
.sign{
  padding: 0% 9%;
  display: flex;
  justify-content: space-between;
}
.main_sign{
  display: flex;
  justify-content: space-between;
  width: 58%;
}
.link{
  color: #f4ca98 ;
}
.link:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
a{
  text-align: center;
  color: #f4ca99;
  text-decoration: none;
}
a:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
.admin_link{
  padding: 6% 9%;
  text-align: center;
  color: #f4ca99;
}
.admin_link: hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
.admin_main_link{
  color: #f4ca98;
  text-decoration: none;
}
.admin_main_link: hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
.signup_details{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 10px;
}
.typed_sign{
  background: linear-gradient(97.24deg, #f4ca98 50.37%, rgba(243, 194, 95, 0.233) 113.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent; 
  font-size: 50px;
  font-weight: bold;
}
.main_signup_sign{
  display: flex;
  justify-content: space-between;
  width: 61%;
}
`
export default Registration

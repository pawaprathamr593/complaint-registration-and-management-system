import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image1 from '../../Images/Image1.png'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC'

const Home = () => {
   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand><Link to={'/'}className={`nav-link text-light `}>SolutionPlus </Link> </Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'}
                        className={`nav-link text-light `}
                     >
                        Home
                     </Link>
                  </li>
                 
                  <li className="nav-item mb-2">
                     <Link
                     to={'/signup'}
                        className={`nav-link text-light `}
                     >
                        SignUp
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/login'}
                        className={`nav-link text-light `}
                     >
                        Login
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         <Container className='home-container'>
            <div className="left-side">
               <img src={Image1} alt="" />
            </div>
            <div className="right-side">
               <p>
                  <span className='f-letter'>The Solution You Need,</span><br />
                  <span className='s-letter'> Experience the difference with our customer service</span> <br />
                  <span className='t-letter'>We listen, we care, we deliver.</span><br />
                  <Link to={'/Login'}><Button className='mt-3 regi'>Register your Compliant</Button></Link>
               </p>
            </div>
         </Container>
         <Footer/>
      </>
   )
}

export default Home

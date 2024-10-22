import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormLabel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import AddBoutique from './AddBoutique';
import Contact from './Contact';

import ReactStars from "react-rating-stars-component";
import Like from './Rate';
import Rate from './Rate';
import User from './User';
import Notification from './Notification';



function Navbarr({setText, setRate}) {
  return (
 
       <div>
         <div className='svg'>
         <div className='log'>
      <img src='Capture décran.png' style={{width:"170px", height:"105px", display:"flex", justifyContent:"space-around"}}         
           /> </div>
         
            
         <Link to="/notification">


            
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"  style={{display:"flex", justifyContent:"space-around"}}>
          
            <path fill="currentColor" d="M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.6 12.6 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.6 12.6 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75M5.13 28.94a16.2 16.2 0 0 0 2.44-3a14.2 14.2 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.2 14.2 0 0 0 1.65 5.85a16.2 16.2 0 0 0 2.44 3Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/>
            
            
            </svg>
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"  style={{display:"flex", justifyContent:"space-around"}}>
            <path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21M10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57 57 0 0 0 18 30.16a57 57 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.3 7.3 0 0 0-2-.29" class="clr-i-outline clr-i-outline-path-1"/>
            <path fill="none" d="M0 0h36v36H0z"/>
            </svg>
            <div>
              <AddBoutique />
           </div>
        <Rate setRate={setRate} />

          <Form className="d-flex"  >
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
           
              onChange={(e)=> setText(e.target.value)}/>
              <Button variant="outline-success"> Search</Button>
          </Form>
          
         
          <button variant="secondary" style={{borderRadius:"30px", display:"flex",alignItems:"center", background: "radial-gradient(circle, rgba(187,186,184,1) 0%, rgba(230,217,225,0.34730388737526263) 79%, rgba(159,155,158,1) 100%)"

          }} > 
               
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
          <g fill="none" stroke="#edcf07" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0"/>
            </g>
            </svg>   
            Log in <User />             
            
            
            </button>   
         
         
         
          </div>
          
          
          
         
    
<Nav className="me-auto" >
          <Nav.Link href="#home"><Link to ="/"  style={{textDecoration:"none", color:"black", display:"flex", justifyContent: "space-around" ,fontFamily:'cursive',fontSize:"24px"}}>Home</Link></Nav.Link>
          
          <Nav.Link href="#link"><Link to ="/about" style={{textDecoration:"none", color:"black" ,fontFamily:'cursive',fontSize:"24px"}}>About</Link></Nav.Link>
          
          

          <Nav.Link href="#link"><Link to ="/contact" style={{textDecoration:"none", color:"black"  ,fontFamily:'cursive',fontSize:"24px"}}>
      
    Contact</Link></Nav.Link>

  
          
          
          

      
          

          <NavDropdown title="Mode" id="basic-nav-dropdown"   style={{ fontFamily:'cursive',fontSize:"24px", WebkitTextFillColor:"black"}}>
            <NavDropdown.Item href="#action/3.1">Femme</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Bebe</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Homme</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accessoire</NavDropdown.Item>

           
          </NavDropdown>
          <Nav.Link href="#link"><Link to ="/promos" style={{textDecoration:"none", color:"black"  ,fontFamily:'cursive',fontSize:"24px"}}>Promos</Link></Nav.Link>

         
        </Nav>
       </div>

   )
}

export default Navbarr


        
   
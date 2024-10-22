import React from 'react'
import ReactStars from "react-rating-stars-component";
import BoutiqueList from './BoutiqueList';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
function Rate({setRate}) {
  const [show, setShow] = useState(false);
const dispatch=useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>

<Button variant="none" onClick={handleShow}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#edcf07" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#edcf07" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#edcf07" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> rating    
                     </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>rate
        <ReactStars
                    edit={true}
                    count={5}
                    value={BoutiqueList.rating}
                    size={24}
                    activeColor="#ffd700" 
                    onChange={(new_rating)=>setRate(new_rating)} 
                    />   
           </Form.Label>
      
      
      </Form.Group>
      </Form>
      
    
     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>




    </div>
  )
}


export default Rate
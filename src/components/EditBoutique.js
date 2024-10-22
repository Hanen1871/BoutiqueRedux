import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editboutique } from '../redux/boutiqueslice';
function Editboutique({boutique}) {
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
 const [edited, setedited]=useState({
    description:"",
    image:"",
    rating:"",

 })
    return (
    <div className='edit'>
    <Button variant="secondary" onClick={handleShow}>
    Edit 
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Edit boutique</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>rating</Form.Label>
        <Form.Control type="text" placeholder={boutique.rating} onChange={(e)=>setedited({...edited,rating:e.target.value})}/>
       
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>boutique description</Form.Label>
        <Form.Control type="text" placeholder={boutique.description} onChange={(e)=>setedited({...edited,description:e.target.value})} />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>boutique image</Form.Label>
        <Form.Control type="text" placeholder={boutique.img} onChange={(e)=>setedited({...edited,img:e.target.value})} />
       
      </Form.Group>
      </Form.Group>
            </Form>



      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="none" onClick={()=>dispatch(editboutique({id:boutique.id, edited}))} >
       Edit
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}


export default Editboutique

import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addboutique } from '../redux/boutiqueslice';
import { useDispatch } from 'react-redux';
function User() {
  const [show, setShow] = useState(false);
const dispatch=useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>

<Button variant="none" onClick={handleShow}>

      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      </Form>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>password </Form.Label>
        <Form.Control type="password"  />
        <Form.Text className="text-muted">
ce password doit contenir des chiffres, alphbets et carctére        </Form.Text>
      
      </Form.Group>
      </Form>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirmation du password </Form.Label>
        <Form.Control type="password" />
       
      </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
          Ok 
          </Button>
        </Modal.Footer>
      </Modal>




    </div>
  )
}

export default User
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Card  from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl=useNavigate()
  return (
    <>
  <Row className={'mt-5 mb-5 d-flex justify-content-center align-items-center'}>
    <Col> </Col>
    <Col lg={5}>
      <h3>Welcome To <span className='text-warning'> Media player</span></h3>
      <p className='mt-3'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur nemo fugiat magni, voluptates ea unde libero repellendus iure dolore quis. Nesciunt sapiente culpa non numquam ullam iusto optio dolore pariatur.
      </p>
      <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Started</button>
    </Col>
    <Col></Col>
    <Col lg={5}>
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
    </Col>
  </Row>
  <div className='container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center flex-column'>
    <h3>Features</h3>
   <div className='cards d-flex justify-content-evenly align-items-center w-100'>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Categorised Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
  </div>
    </>
  )
}

export default Landingpage
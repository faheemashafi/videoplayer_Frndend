import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import{Link} from 'react-router-dom'

function Head() {
  return (
    <Navbar className="bg-body-dark">
    <Container>
      <Navbar.Brand href="#home">
        
      <Link to={'/'} style={{textDecoration:'none',color:'white', fontSize:'30px'}}>
      <i class="fa-solid fa-video fa-beat-fade"></i>
      Video Player
      </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Head
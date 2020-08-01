import React from 'react'
import {Jumbotron, Button, Container, Row} from 'react-bootstrap'

const Header = () => {

  const backgroundImage = {
  
  };
  return (
    <div>
<Jumbotron className='jumbotron' fluid>
 <Container>
 
 <h1 className="title">Trevor Mearns</h1>
  <h3 className="sub-title">
    Personal Website & Repository of Thoughts
  </h3>
  <Row className="justify-content-center">
  
  </Row>
  <p>
  <Button  id="button" className="btn bg-transparent btn-outline-light">See My Work</Button>
  </p>
 
 </Container>
</Jumbotron>
    </div>
  )
}

export default Header
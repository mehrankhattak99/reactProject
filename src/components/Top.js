import React from 'react';
import { CardImg, CardTitle,CardBody } from 'reactstrap';
import { Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Top(){
return(
  <Navbar bg="light" expand="lg">
  <Container>
    <CardTitle tag="h2" class="d-flex justify-content-center"
     style={{
      marginLeft:"15rem",
      }}
    >
      Become Master <br></br>
        Learn New skills online<br></br>Find best courses <br></br>
        <button type="radio" class="btn btn-warning btn-sm" >Get a Qoute</button>
        <button type="radio" class="btn btn-light btn-sm" >Read More</button>
      </CardTitle>
      
    <CardBody >
    <CardImg
    src="/imgs/topimg.jpg" alt="" 
    
      style={{
        width:"50%",
        height:"15rem",
        marginLeft:"5rem",
        backgroundColor:"light"
      
        }}
      />
    </CardBody>
  </Container>
  </Navbar>
  )};

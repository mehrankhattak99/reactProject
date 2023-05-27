import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card} from 'react-bootstrap';
export default function Bottom(){
    return(
        <Row className='bg-light'
    style={{
        width: '76rem',
        marginBottom: '3rem',
        backgroundColor:'light',
        }}> 
                <Col xs={10} md={2} className='px-6' >
                <Card className="bg-light card border-light"style={{  left: 200, bottom: 0, }}>
                    <Card.Body>
                    <Card.Img variant="top" src="/imgs/topimg.jpg" />
                    <Card.Title>768</Card.Title>
                    <Card.Text>
                        Courses Published
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={10} md={2} className='px-6'>
                <Card className="bg-light card border-light"style={{  left: 200, bottom: 0, }}>
                    <Card.Body>
                    <Card.Img variant="top" src=" /imgs/topimg.jpg" />
                    <Card.Title>120</Card.Title>
                    <Card.Text>
                        Expert Instructor
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={10} md={2} className='px-6'>
                <Card className="bg-light card border-light"style={{  left: 200, bottom: 0, }}>
                    <Card.Body>
                    <Card.Img variant="top" src=" /imgs/topimg.jpg" />
                    <Card.Title>8,300</Card.Title>
                    <Card.Text>
                        Happy Learners
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={10} md={2} className='px-6'>
                <Card className="bg-light card border-light"style={{  left: 200, bottom: 0, }}>
                    <Card.Body>
                    <Card.Img variant="top" src=" /imgs/topimg.jpg" />
                    <Card.Title>32</Card.Title>
                    <Card.Text>
                        Award Acheived
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
    
                
            </Row>
    )};

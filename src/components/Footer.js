import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card} from 'react-bootstrap';

export default function Footer(){
    return(        
               
        <Row className="bg-warning text-lg-start" style={{ position: "fixed", left: 0, bottom: 0, width: "100%", align: "center"}}>
        <Col xs={14} md={6} className='px-8'>
                <Card className="bg-warning card border-warning"style={{ position: "fixed", left: 80, bottom: 50, align: "center"}}>
                    <Card.Text>
                    <ul>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg> <b>For Education</b> <br></br><br></br>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> 
     1500 Treat Ave, Suite 200San Francisco, CA 94110 <br></br>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>vctung@outlook.com <br></br>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>1-800-800-2299 (Support)
</ul>
                    </Card.Text>
              
                </Card>
                </Col>
                
        <Col xs={12} md={2} className='px-4'>
                <Card className="bg-warning card border-warning">
                    <Card.Text>
                  <ul>
                    <b>community</b> <br></br>
                    Learners <br></br>
                    Partners <br></br>
                    Partners <br></br>
                    Articles <br></br>
                    Directory <br></br>
                    Afiliates <br></br>
                    

                  </ul>
                    </Card.Text>
              
                </Card>
                </Col>
                        
        <Col xs={12} md={2} className='px-4'>
                <Card className="bg-warning card border-warning">
                    <Card.Text>
                  <ul>
                    <b>Information</b> <br></br>
                    About <br></br>
                    pricing <br></br>
                    Blog <br></br>
                    Careers <br></br>
                    Contacts <br></br>
    
                  </ul>
                    </Card.Text> 
                </Card>
                </Col>
                        
        <Col xs={12} md={2} className='px-4'>
                <Card className="bg-warning card border-warning">
                    <Card.Text>
                  <ul>
                    <b>More</b> <br></br>
                    Press <br></br>
                    Investers <br></br>
                    Terms <br></br>
                    Privacy <br></br>
                    Help <br></br>
                    Accessibility <br></br>
                    Contacts <br></br>
                    

                  </ul>
                    </Card.Text>
              
                </Card>
                </Col>
        </Row>
         
        )}

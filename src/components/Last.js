import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Last(){
    return(

<div class="card mb-3"style={{
        width: '78rem',
        marginBottom: '3rem',
        }}>  
  <div class="row g-0">
    <div class="col-md-4"style={{
        marginLeft:'15rem',
    
        }}>
      <img src="/imgs\illustrated-cool-girl-min.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-4"style={{
        marginRight:'5rem',
        }}>
      <div class="card-body">
      <p class="card-text"><small class="text-body-secondry "><b>Subscribe Now</b></small></p>
        <h2 class="card-title">Get every Single Update you will get</h2>
        <div class="input-group ml-3">
  <input type="text" class="form-control" placeholder="Enter Email address" aria-label="Enter" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">subscribe Now</span>
</div>
      </div>
    </div>
    
  </div>
</div>
)};
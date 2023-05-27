import React  from 'react'
import {} from 'react-router-dom';


function Signup () {
  
  return (
    <div className="signup-container">
      <h2>Sign up</h2>
    <form>
        <label style={{marginTop:"15px"}}>
          Full Name:
          <input type="text" name='name'  placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="text" name='email'  placeholder="Your Email" />
        </label>
        <label>
          Phone:
          <input type="text" name='phone'  placeholder="Your phone number" />
        </label>
       <label>
          Password:
          <input type="password" name='password'  placeholder="Your Password"/>
        </label>
        <label>
          Confirm Password:
          <input type="password" name='confirmpassword'  placeholder="Confirm Password"/>
        </label>
       
        <input  value="Male"  name="gender" type="radio" />{" "}
          <label htmlFor='Male'>Male</label>
        
          <input  value="Female"  name="gender" type="radio" />{" "}
          <label htmlFor='Female' >Female</label>
         

      </form>
    </div>
  );
}

export default Signup;

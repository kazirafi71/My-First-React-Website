import React, { useState } from 'react';

const Contact = () => {


    const [val,setVal]=useState({
        name:'',
        email:'',
        pass:'',
        text:'',
    });


    const inputValue=(event)=>{
        const {name,value}=event.target;

        setVal((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        })

        
    }

    const buttonText=()=>{
        alert(val.name)
    }

    return (
        <div>
            <h1 className="text-center ">Contact Us</h1>
            <div>
                <div className="row">
                    <div className='col-sm-10 col-md-6 mx-auto'>
                    <form>
                    <div class="form-group">
    <label for="exampleInputPassword1"> Name</label>
    <input  name="name" value={val.name} onChange={inputValue} type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" value={val.email} onChange={inputValue}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"> Password</label>
    <input  name="pass" value={val.pass} onChange={inputValue} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Enter Your Messages</label>
    <textarea name="text" value={val.text} onChange={inputValue} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  
</form>
        <button onClick={buttonText} type="submit" class="btn btn-primary my-3">Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;
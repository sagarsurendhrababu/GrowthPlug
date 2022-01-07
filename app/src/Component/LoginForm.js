import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function LoginForm() {

    const [userValue, setuserValue] = useState('');
    const [passValue, setpassValue] = useState('');

    const [uservalidate,setUserValidate] = useState(false);
    const [passvalidate,setPassValidate] = useState(false);

    // collecting data from form
    const formDataHandler = (event)=>{
        event.preventDefault();
        if(userValue.trim().length===0){
            setUserValidate(true);
        }
        if(passValue.trim().length===0){
            return setPassValidate(true);
        }
        if(userValue && passValue){
            window.location = "/dashboard";
        }
        userValue = '';
        passValue = '';
    }
    // user name input data 
    const userData = (event)=>{
        setuserValue(event.target.value);
        setUserValidate(false);
    }
    // user password input data
    const userPass = (event)=>{
        setpassValue(event.target.value);
        setPassValidate(false);
    }    
    return (
        <React.Fragment>
            <div className="col12 sm4 md8 flexCC c1b" id="container">
                <div className="col4 sm4 md5 c6b pa2 br2 loginform shadow1">
                    <form className='col12 sm4 md8 flexDCC prl' onSubmit={formDataHandler} id='loginForm'>
                        <h4 className='c7t mf pt'><i class="fas fa-lock"></i> User login Area</h4>                         
                        <div className="col12 sm4 md8 mt">
                            <label htmlFor="" className='c7t mf col12'>User Name</label>
                            <input type="text" placeholder='User Name' className='bn' style={{borderColor: uservalidate? "#FF7070": "white"}}
                            onChange={userData} value={userValue} />                            
                        </div>
                        <div className="col12 sm4 md8 mt">
                            <label htmlFor="" className='c7t mf col12'>Password</label>
                            <input type="password" placeholder='Password' className='bn' style={{borderColor: passvalidate? "#FF7070": "white"}} 
                            onChange={userPass} value={passValue}/>                            
                        </div> 
                        <div className="col12 sm4 md8 mt2 flexDCC">
                            <button className='btn2 br bn col12 c3b c7t loginBtn'><h5 className='mf'>Login</h5></button>
                            <div className="col12 sm4 md8 flexCC">
                                <h5 className='col12 sm4 md8 mt tac bf c5t flex'><i class="fas fa-user c5t"></i><Link to="/signup" className='ml c5t'>Create an Account</Link> </h5>
                                <h5 className='col12 sm4 md8 mt tac bf c5t flex'><i class="fas fa-unlock-alt c5t"></i><Link to="/forgot" className='ml c5t'>Forgot Password</Link></h5>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
export default LoginForm

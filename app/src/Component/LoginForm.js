import React, { useState } from 'react'

function LoginForm() {

    const [userValue, setuserValue] = useState('');
    const [passValue, setpassValue] = useState('');

    const [validate,setValidate] = useState(false);

    // collecting data from form
    const formDataHandler = (event)=>{
        event.preventDefault();
        if(userValue.trim().length===0){
            setValidate(true);
        }
        if(passValue.trim().length===0){
            setValidate(true);
        }
    }
    // user name input data 
    const userData = (event)=>{
        setuserValue(event.target.value);
        setValidate(false);
    }
    // user password input data
    const userPass = (event)=>{
        setpassValue(event.target.value);
        setValidate(false);
    }    


    return (
        <React.Fragment>
            <div className="col12 sm4 md8 flexCC c1b" id="container">
                <div className="col4 sm4 md5 c6b pa4 br2 loginform">
                    <form className='col12 sm4 md8 flexDCC' onSubmit={formDataHandler}>
                        <h4 className='c7t mf'>User login Area</h4>                         
                        <div className="col12 sm4 md8 mt">
                            <label htmlFor="" className='c7t mf'>User Name</label>
                            <input type="text" placeholder='User Name' className='bn' style={{backgroundColor: validate? "red": "white"}}
                            onChange={userData} value={userValue} />                            
                        </div>
                        <div className="col12 sm4 md8 mt">
                            <label htmlFor="" className='c7t mf'>Password</label>
                            <input type="number" placeholder='Password' className='bn' style={{backgroundColor: validate? "red": "white"}} 
                            onChange={userPass} value={passValue}/>                            
                        </div> 
                        <div className="col12 sm4 md8 mt flexDCC">
                            <button className='btn2 br bn col12 c3b c7t'><h5 className='mf'>Login</h5></button>
                            <h6 className='col12 sm4 md8 mt tac mf'>Forgot Password</h6>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginForm

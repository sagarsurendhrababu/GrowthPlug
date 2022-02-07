import React,{useRef,useState} from 'react'

function Form() {
    const nameInput = useRef();
    const emailInput = useRef();
    const passInput = useRef();

    // validation master state
    const [validate,setValidate] = useState({
        name:{
            empty:true,
            success:false
        },
        email:{
            empty:true,
            success:false
        },
        pass:{
            empty:true,
            success:false
        }
    });

    //empty field finder function validation
    const isEmpty = value => value.trim() === '';

    // form submit handler
    const formSubmitHandler = (event)=>{
        event.preventDefault();
        
        const nameInputValue = nameInput.current.value;
        const emailInputValue = emailInput.current.value;
        const passInputValue = passInput.current.value;

        const nameValidate = !isEmpty(nameInputValue);
        const emailValidate = !isEmpty(emailInputValue);
        const passValidate = !isEmpty(passInputValue);
        
        setValidate({
            ...validate,
            name:{
                empty:nameValidate
            },
            email:{
                empty:emailValidate
            },
            pass:{
                empty:passValidate
            }
        })

    }

    const nameValidate = (event)=>{
        const output = event.target.value; 

        if(output.trim().length <= 5)  {
            setValidate({...validate,
                name:{
                    empty:false,
                    success:false
                }
            })
        }else{
            setValidate({...validate,
                name:{
                    empty:true,
                    success:true
                }
            })            
        }        
    }

    const emailValidate = (event)=> {
        const output = event.target.value; 

        if(output.trim().length <= 15) {
            setValidate({...validate,                
                email:{
                    empty:false,
                    success:false
                }
            })
        }else{
            setValidate({...validate,                
                email:{
                    empty:true,
                    success:true
                }
            })            
        }
    }

    const passValidate = (event)=>{

        const output = event.target.value; 

        if(output.trim().length <= 5)  {
            setValidate({...validate,                
                pass:{
                    empty:false,
                    success:false
                }
            })
        }else{
            setValidate({...validate,                
                pass:{
                    empty:true,
                    success:true
                }
            })            
        }        

    }

    const nameStyle = validate.name.empty? validate.name.success? 'valid':'' : 'invalid' ;
    const emailStyle = validate.email.empty? validate.email.success? 'valid':'' : 'invalid';
    const passStyle = validate.pass.empty? validate.pass.success? 'valid':'' : 'invalid';

    return (
        <div className='col12 flexCC'>
            <form className='col6' onSubmit={formSubmitHandler}>
                <input type="text" placeholder='Name' ref={nameInput} onChange={nameValidate} className={nameStyle}/>
                {!validate.name.empty && <p  style={{color:"red"}}>Your Name should be minimum 5 characters</p>}
                <input type="text" placeholder='Email' ref={emailInput} onChange={emailValidate} className={emailStyle}/>
                {!validate.email.empty && <p  style={{color:"red"}}>Your Email is Invalid</p>}
                <input type="text" placeholder='Password' ref={passInput} onChange={passValidate} className={passStyle}/>
                {!validate.pass.empty && <p  style={{color:"red"}}>Your Email is Invalid</p>}
                <button className='btn2 c2b c7t bn'>Send</button>
            </form>
        </div>
    )
}

export default Form

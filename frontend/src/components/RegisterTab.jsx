import React , { useState,useContext } from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {LoginContext} from "./LoginContext";
function Register() {
const {register,watch, errors,handleSubmit}=useForm();
let history = useHistory();
const [nameTaken,setNameTaken] = useState(false);
const [loggedIn, setLoggedIn] = useContext(LoginContext);
console.log("register");


const onSubmit = (data,e) => {
    axios
      .post('/user/auth/register', data)
      .then(response => {
        if (response.data.status) {
            console.log('successful signup')
                setLoggedIn({username:response.data.username,status:response.data.status});
                history.push(`/user/home/${response.data.username}`);
        } else {
            setNameTaken(true);
        }
    })
      .catch(err => {
        console.error(err);
      });
  

    console.log(data);
      e.preventDefault();
      e.target.reset();    
    
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-group">
          <input type="text" className="form-control" placeholder= "User Name" name="username" ref={register} required/>
        </div>
      

        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" name="email" ref={register}/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" className="form-control" name="password" ref={register({pattern:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/})} required/>
          {errors.password && <p>Minimum eight characters, at least one letter and one number and a special character</p>}
        </div>
        <div className="form-group">
        <input type="password" className="form-control" name="cnfPassword" ref={register({validate: (value) => value === watch('password')})} placeholder="Confirm Password" required/>        
        {errors.cnfPassword && <p>Passwords don't match</p>}
        </div>
        
        <button type="submit" className="btn signUp">
          Register
        </button>
        {nameTaken && <p> Sorry, email id already exists!</p>}
      </form>
    </div>
  );
}

export default Register;

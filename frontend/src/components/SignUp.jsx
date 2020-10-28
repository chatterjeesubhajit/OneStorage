import React, { useState } from "react";
import Header from "./Header";
import classNames from "classnames";
import Register from "./RegisterTab";
import LoginTab from "./LoginTab";
import { FcGoogle } from "react-icons/fc";
import logo from "../oneStorage.png";

function SignUp() {
  console.log("environment :",process.env.NODE_ENV);
  const containerClasses = classNames("container", "mt-5");
  const navClasses = classNames("nav", "nav-tabs");
  const navItemClasses = classNames("nav-link", "active");
  console.log("sign up");
  // const tabStyle = {width: "20rem" };

  const [register, setRegister] = useState(false);
  function registerClick() {
    setRegister(true);
  }
  function loginClick() {
    setRegister(false);
  }

  return (
    <div>
      <Header />
      <div className={containerClasses}>
        <ul className={navClasses}>
          <li className="nav-item">
            <button onClick={loginClick} className={navItemClasses}>
              Login
            </button>
          </li>
          <li style={{ paddingLeft: "0.5rem" }} className="nav-item">
            <button onClick={registerClick} className="nav-link">
              Register
            </button>
          </li>
        </ul>
        <div className="row">
        <div className="col-sm-6">
          {register ? (
            <div style={{paddingTop:"2%"}}>
              <Register />
            </div>
          ) : (
            <div>
              <div className="card-body">
                <LoginTab />
              </div>
            </div>
          )}
        </div>
        <div className="col-sm-6">
          <div
            // style={{
            //   color: "white"
            // }}
          >
            <h1 style={{textShadow:"0.5px 0.5px #440c05"}}>OneStorage</h1>
            <ul>
              <h3>One interface for multiple cloud storages!</h3>
              <ul>
              <li> Add your google drive, one drive and dropbox accounts</li>
              <li> Access all your files in an organized way, in one place</li>
              <li> Manage multilple cloud storages with a single interface - realize more storage!</li>
              </ul>  
              <img src={logo} style={{position:"absolute",right:"1%"}}  width="600" height="450" alt="oneStorage logo"/>            
            </ul>
          </div>
        </div>
        </div>
        
      </div>
      
    </div>
    
  );
}

export default SignUp;

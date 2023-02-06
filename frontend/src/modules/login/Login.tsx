import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';
import {loginUser} from '@store/reducers/auth';
import {setWindowClass} from '@app/utils/helpers';
import {PfButton, PfCheckbox} from '@profabric/react-components';

import * as Yup from 'yup';

import {Form, InputGroup} from 'react-bootstrap';
import * as AuthService from '../../services/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const history = useNavigate();

 

useEffect(() => {
  //getName();
}, []);

/*const getName = async (e) => {
  e.preventDefault();
  try {
      await axios.post(`http://localhost:5000/getname`, {
          name: name
  })
}
  catch (error) {
      if (error.response) {
          setMsg(error.response.data.msg);
      }
  }
}*/

  const Auth = async (e) => {
      e.preventDefault();
      try {
          await axios.post(`http://localhost:5000/login`, {
              email: email,
              password: password
          }).then((res)=>{
              //console.log(res.data[0].length > 0)
              if(res.data[0].length > 0){
                 // console.log("wrong credential");
                  history("/main", {state: { email,password}});
                  toast.success("Logged in Successfully", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                  });
              }else {
                toast.error("Wrong Credentials.", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 1500,
                });
                // alert("wrong credential");
                //   //console.log("wrong credential");
              history("/");
              }
          })
          
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }

  return (
    <section style={{ backgroundImage: "url(/img/background.jpg)" ,
    backgroundSize: 'cover',
    height:'100vh',
marginTop:'0px',
backgroundRepeat: 'no-repeat',      
  }}>
      <div className="center">
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <Link to="/" className="h1">
            <b>SECAB</b>
            <span>HRMS</span>
          </Link>
        </div>
        <div className="card-body">
          <p className="login-box-msg">{msg}</p>
          <form onSubmit={Auth}>
            <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                 type="text" className="input" 
                 placeholder="Enter Email Id" 
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)} 
                 required/>
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <i className="fas fa-envelope" />
                    </InputGroup.Text>
                  </InputGroup.Append>
              </InputGroup>
            </div>
            <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                  type="password"
                   className="input" 
                  placeholder="******"
                   value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                   required/>
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <i className="fas fa-lock" />
                    </InputGroup.Text>
                  </InputGroup.Append>
              </InputGroup>
            </div>

            <div className="row">
              {/* <div className="col-8">
                <PfCheckbox checked={false}>
                Remember Me
                </PfCheckbox>
              </div> */}
              <div className="col-12">
                <PfButton>
                 Login
                </PfButton>
              </div>
            </div>
          </form>
          <br/>
          
          <p className="mb-0">New User?
            <Link to="/register" className="text-center">
             Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;

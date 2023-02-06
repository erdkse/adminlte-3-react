import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {loginUser} from '@store/reducers/auth';
import {setWindowClass} from '@app/utils/helpers';
import {Form, InputGroup} from 'react-bootstrap';
import {PfButton, PfCheckbox} from '@profabric/react-components';

import * as AuthService from '../../services/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_Password, setConfirm_Password] = useState('');
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const Register = async (e) => {
      e.preventDefault();
      try {
          await axios.post(`http://localhost:5000/register`, {
              name: name,
              email: email,
              password: password,
              confirm_Password: confirm_Password
          });
          toast.success("Registered  Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });
          history("/");
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
          <form onSubmit={Register}>

          <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Name"
                  value={name} onChange={(e) => setName(e.target.value)} required/>
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
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email} onChange={(e) => setEmail(e.target.value)} required/>
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
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <i className="fas fa-lock" />
                    </InputGroup.Text>
                  </InputGroup.Append>
              </InputGroup>
            </div>

            <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                  id="passwordRetype"
                  name="passwordRetype"
                  type="password"
                  placeholder="Retype password"
                  value={confirm_Password} onChange={(e) => setConfirm_Password(e.target.value)} required/>
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <i className="fas fa-lock" />
                    </InputGroup.Text>
                  </InputGroup.Append>
              </InputGroup>
            </div>

            <div className="row">
              {/* <div className="col-7">
                <PfCheckbox checked={false}>
                  <span>I agree to the </span>
                  <Link to="/">terms</Link>
                </PfCheckbox>
              </div> */}
              <div className="col-12">
                <PfButton
                  type="submit"
                >Register
                </PfButton>
              </div>
            </div>
          </form>
         <br/>
          <Link to="/" className="text-center">
          Already Registered?
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Register;

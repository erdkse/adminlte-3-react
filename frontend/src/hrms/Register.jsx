import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bulma/css/bulma.css";

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
            history("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <section style={{ backgroundImage: "url(/background.jpg)" ,
            backgroundSize: 'cover',
            height:'100vh',
        marginTop:'0px',
        backgroundRepeat: 'no-repeat',      
          }}>
            <div className='Register'>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <br/>
                            <form onSubmit={Register} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={confirm_Password} onChange={(e) => setConfirm_Password(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>

                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
 
export default Register;
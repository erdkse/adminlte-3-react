import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import "bulma/css/bulma.css";

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
                    history("/dashboard", {state: { email,password}});
                }else {
                    alert("wrong credential");
                    //console.log("wrong credential");
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
        <section style={{ backgroundImage: "url(/background.jpg)" ,
            backgroundSize: 'cover',
            height:'100vh',
        marginTop:'0px',
        backgroundRepeat: 'no-repeat',      
          }}>
            <div className="hero-body">
                <div className="container">
                <br/><br/><br/>
                    <div className="columns is-centered">
                        <div className="column is-5-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email Id</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Enter Email Id" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                                <div className="field mt-5">
                                    <p>New User?</p>
                                    <Link to ="/register">
                                    <p >Register Here</p>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Login;
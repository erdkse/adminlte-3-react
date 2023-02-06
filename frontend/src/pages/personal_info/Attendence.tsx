import React from 'react'
import { useState } from 'react';

function Attendence() {
    const [date, setDate]= useState('');

    const Attendence = async (e) => {
        e.preventDefault();
    await axios.post('http://localhost:5000/attendence',{
            date: date,
        });
        navigate("/");
    }
  return (
    <form onSubmit={ Attendence }>
        <center>
        <div className="bg-lightblue head"><b>Daily Employee Attendance</b></div>
        <div className="margin" >
        <label className="label">Select Date</label>
        <input type='date' className='fa fa-calendar' value={date} onChange={(e)=>setDate(e.target.value)} />
        <br/>
        <div className="field">
            <button className="button bg-danger">Submit</button>
            </div>
        </div>
        </center>
    </form>
  )
}

export default Attendence
import React, {useState,useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {ContentHeader} from '@components';

const Contact = () => {

    const [cid , setCid] = useState('');
    const[clgnames, setClgNames]= useState('');
    const [ college, setCollege] = useState([]);
    const[ dept,  setDept]= useState('');
    const [ depta, setDepta] = useState([]);

    const[iname,setIname]= useState([]);
    const {state} = useLocation();
    const history = useNavigate();


       
       useEffect(() => {
         axios.get('http://localhost:5000/getclgnames',{
            //id: clgnames.id,
        }).then((res)=>{
            // console.log(res.data[0]);
             setCollege(res.data[0]);
         })
       },[]);
       
       
       const getDept = async (e) => {
        const response = await axios.get(`http://localhost:5000/getdept`, {
      params: {
        id:cid.name,
      },
    })
          console.log(e.target.value);
         setDept(e.target.value); 
       }; 
       
  return (
    <center>
<div className="content mt-3">

  
<div className="card">
<div className="card-header">
    <strong>Contact Details</strong>
</div>
<div className="card-body card-block">
    <form action="list_mobile" method="post"  className="form-horizontal">
        <center>


        <div className="col">
<div className="col-sm-7">
                <label className="label" color='black'>Select Institute</label>
  <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-university fa-lg"></i></div>
                <select name="insti" id="clg" required className="form-control"  onChange={(e) => getDept(e)} >
                    <option>Select Institute</option>
            {
              
                college.map((id,i) => (  
                            <option value={id.id}>{id.iname}</option>   
                            
                ))
                
                }                       </select>
    </div>
            </div><br/>
            
            <div className="col-sm-7">
                <br/><label className="label" color="black">Select Department</label><br/>
  <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-building "></i></div>
                <select required name="dept" id="dept" className="form-control" onChange={(e) => setDept(e.target.value)}>
                <option>Select Department</option>
            {
              
                depta.map((cid,i) => (  
                            <option value={cid.id}>{cid.name}</option>   
                            
                ))
                
                }    
                </select>
            </div>
            </div>
   
  </div>
  
<br/>
        <button type="submit" id="submit" className="btn btn-primary btn-sm">
            <i className="fa fa-dot-circle-o"></i> Submit
        </button>

        <button type="reset" className="btn btn-danger btn-sm">
            <i className="fa fa-ban"></i> Reset
        </button>
        </center>   
</form>
</div>
</div>
				        </div>
                        </center>
  );
};

export default Contact

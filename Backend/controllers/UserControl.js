import db1 from '../config/Database.js'; 
import Users from "../models/UserModel.js";

export const getAllUser = async (req, res) => {
    let q3 = `select *  from users`;
  let data = await db1.query(q3);
  //  console.log("select distinct standard from students");
  res.send(data);
    
}
 
// export const getUsers = async(req, res) => {
//     let data=req.body;
//     console.log(data);
//     try {
//         const users = await Users.findAll({
//             attributes:['id','name','email']
//         });
//         res.json(users);
//     } catch (error) {
//         console.log(error);
//     }
// }

export const Register = async (req, res) => {
    const { name, email } = req.body;

    if(!name.trim()) 
    return res.status(400).json
    ({msg: "enter name"});

      else if (!email.trim()) return res.status(400).json({msg: "enter email"});
      
      else{
        let q2 = `insert into users (name,email,password,confirm_password) value('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.confirm_Password}')`;
        const { password, confirm_Password } = req.body;
        if(password !== confirm_Password) return res.status(400).json({msg: "Password and Confirm Password do not match"});
        let re = await db1.query(q2);
        //console.log(re.insert_id);
        //res.send(`${re.insert_id}`)
      
        res.send(`${re.insert_id}`);   
    }
}
    
export const Login = async(req, res) => {
    const { name, email } = req.body;
   
    let q1 = `select * from users where email='${req.body.email}' and password='${req.body.password}'`;
    let data = await db1.query(q1);
    
    res.send(data);   
   
} 

export const getUsers = async(req, res) => {
    const { email, password } = req.body;  
    let q1 = `select * from users where email='${req.body.email}' and password='${req.body.password}'`;
    let data = await db1.query(q1);
    //console.log(data)
    res.send(data[0]);     
      
}
export const getRoles = async(req, res) => {

    let q1 = `select * from role where role_id='${req.body.id}'`;
    let data = await db1.query(q1);
    console.log(data[0])
    res.send(data[0]);     
      
} 
export const getRole_Name = async(req, res) => {

    let q1 = `select * from role where role_id='${req.body.id}'`;
    let data = await db1.query(q1);
    console.log(data[0])
    res.send(data[0]); 
        
      
} 

export const updatePassword = async (req, res) => {
    let q3 = `update users set password='${req.body.password}' , confirm_password='${req.body.confirm_password}' where id=${req.params.id}`;
    let re = await db1.query(q3);
    //console.log('salman');
    //   //res.send(`${re.insert_id}`)  rs
    res.send(`${re.insert_id}`);
  }

  export const getUserById = async (req, res) => {
    let q3 = `select *  from users where id='${req.params.id}'`;
    let data = await db1.query(q3);
    //  console.log("select distinct standard from students");
  //console.log(data);
    res.send(data);
}
export const getDept = async(req, res) => {

  let q1 = `select * from dept`;
  let data = await db1.query(q1);
  // console.log(data[0])
  res.send(data[0]);     
    
} 
export const getClgNames = async(req, res) => {

  let q1 = `select * from college `;
  let data = await db1.query(q1);
 // console.log(data)

  res.send(data); 
      
}
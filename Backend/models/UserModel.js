import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const UserModel = db.define('users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    confirm_password:{
        type: DataTypes.STRING
    },
    
},{
    freezeTableName: true
});
 
export default UserModel;
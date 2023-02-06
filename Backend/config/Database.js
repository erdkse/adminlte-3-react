import { Sequelize } from "sequelize";
 
const db1 = new Sequelize('login_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db1;
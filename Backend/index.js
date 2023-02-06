import express from "express";
//import AccountRoutes from "./routes/index.js";
import Register from "./routes/index.js";
import cors from "cors";
import router from "./routes/index.js";
const app = express();
 
 
app.use(cors());
app.use(express.json());
//app.use('/accounts', AccountRoutes);
app.use('/users', Register);    
app.use(router);
app.listen(5000, () => console.log('Server running at port 5000'));
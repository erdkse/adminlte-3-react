import express from "express";
 
import { 
 Register,
 getUsers,
//  getName,
 getRole_Name,
 getClgNames,
Login,
updatePassword,
getAllUser,
getRoles,
getDept,
} from "../controllers/UserControl.js";
 
const router = express.Router();
router.get('/getrolename',getRole_Name)
// router.post('/getname',getName)
router.post('/getroles',getRoles)
router.post('/getusers',getUsers)

router.post('/register', Register);
router.post('/login', Login);
router.get('/', getAllUser);
router.get('/getdept', getDept);
router.get('/getclgnames', getClgNames);




router.patch('/:id', updatePassword);
export default router;
import express from 'express'
import { logOut, userLogin, userRegister,getMyProfile } from '../controllers/user.js';
import { isAuthenticated } from '../middleware/auth.js';


const router=express.Router();

router.post('/register', userRegister)

router.post('/login', userLogin);

router.get('/logout',logOut);

router.get('/myprofile',isAuthenticated,getMyProfile);

export default router;
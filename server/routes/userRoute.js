import express from 'express'
import {createUser, readUser, loginUser, logoutUser, getUserProfile} from '../controller/userController.js'
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js'
const router = express.Router()


router.get('/', authenticate, authorizeAdmin, readUser, )
router.post('/', createUser)
router.post('/auth', loginUser)
router.post('/logout', logoutUser)
router.route('/profile').get(authenticate, getUserProfile)


export default router
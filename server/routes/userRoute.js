import express from 'express'
import {createUser, readUser, loginUser, logoutUser, getUserProfile, updateUser, deleteUser, getUserbyId, updateUserbyId} from '../controller/userController.js'
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js'
const router = express.Router()


router.get('/', authenticate, authorizeAdmin, readUser, )
router.post('/', createUser)
router.post('/auth', loginUser)
router.post('/logout', logoutUser)
router.get('/profile', authenticate, getUserProfile)
router.put('/profile', authenticate, updateUser)

// Admin Routes
router.delete('/:id', authenticate, authorizeAdmin, deleteUser)
router.get('/:id', authenticate, authorizeAdmin, getUserbyId)
router.put('/:id', authenticate, authorizeAdmin, updateUserbyId)


export default router
import express from 'express'
import {createUser, loginUser, logoutUser, getAllUsers, getCurrentUserProfile, updateCurrentUserProfile, deleteUser, getUserById, updateUserById} from '../controller/userController.js'
import { authenticate, authorizedAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
    .get(authenticate, authorizedAdmin, getAllUsers)
router.post('/register', createUser)
router.post('/auth', loginUser)
router.post('/logout', logoutUser)

router.route('/profile')
    .get(authenticate, getCurrentUserProfile)
    .put(authenticate, updateCurrentUserProfile)
router.delete('/:id', authenticate, authorizedAdmin, deleteUser)
router.get('/:id', authenticate, authorizedAdmin, getUserById)
router.put('/:id', authenticate, authorizedAdmin, updateUserById)

export default router
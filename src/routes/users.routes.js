import { Router } from 'express'
import { getUsers, createUsers, existingUser } from '../controllers/users.controller.js'

const router = Router()

router.get('/users', getUsers)
router.post('/users', createUsers)
router.get('/users/:email/:password', existingUser)

export default router
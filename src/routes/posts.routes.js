import { Router } from 'express'
import { getPosts, createPost } from '../controllers/posts.controller.js'

const router = Router()

router.get('/posts', getPosts)
router.post('/posts', createPost)

export default router
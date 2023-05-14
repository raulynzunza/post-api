import { Posts } from '../models/Posts.js';

export const getPosts = async (req,res) => {
    try {        
        const posts = await Posts.findAll()            
        res.send(posts)        
    } catch (error) {
        return json.status(500).json({message: error.message})
    }
}

export const createPost = async (req,res) => {
    const { title, description, user_id } = req.body       
    try {
        const newPost = await Posts.create({                    
            title,
            description,
            user_id      
        })
        res.json(newPost)
    } catch (error) {
        return json.status(500).json({message: error.message})
    }

}
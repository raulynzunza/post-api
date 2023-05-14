import { Users } from '../models/Users.js';


export const getUsers = async (req,res) => {
    try {        
        const users = await Users.findAll()    
        res.send(users)        
    } catch (error) {
        return json.status(500).json({message: error.message})
    }
}

export const createUsers = async (req,res) => {
    const { name, email, password } = req.body            
    try {
        const newUser = await Users.create({
            name,        
            email,
            password,
        })
        res.json(newUser)
    } catch (error) {
        return json.status(500).json({message: error.message})
    }

}

export const existingUser = async (req,res) => {
    const { email, password } = req.params           
    try {
        const user = await Users.findAll({               
            where: {
                email,
                password
            }
        })        
        res.json(user)
    } catch (error) {
        return json.status(500).json({message: error.message})
    }

}
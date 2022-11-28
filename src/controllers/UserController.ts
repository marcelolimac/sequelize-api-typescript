import { Request, Response } from 'express'
import { User } from '../models/User'

type UserType = {
    nome: string
    email: string
    password: string
}

module.exports = {
    async listar(req: Request, res: Response) {
        try {
            const users = await User.findAll()
            
            return res.json(users)
            
        } catch (error) {
            console.log(error)
        }
        
    },
    
    async criar(req: Request, res: Response) {
        try {
            const { 
                nome, 
                email, 
                password, 
            } = req.body

            if(await User.findOne({ where: { nome } })) {
                throw Error("Usuário já existe")
            }

            const user: UserType = await User.create({ 
                nome,
                email, 
                password 
            })

            return res.json(user)

        } catch (error) {
            console.log(error)
        }
       
    },
}
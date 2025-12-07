import { Request, Response } from "express";
import { userServices } from "./user.services";

const createUser = async(req: Request, res: Response) =>{
    try {
        const result = await userServices.createUser(req.body)
        res.status(201).send(result)
        
    } catch (error) {
        res.send(400).send(error)
    }
}


const getAllUser = async(req:Request, res: Response) =>{
    try {

        const result = await userServices.getAllUser()
        res.status(200).send(result)
        
    } catch (error) {
        res.send(error)
        
    }
}

const getUserById = async(req:Request, res: Response) =>{
    try {
        const result = await userServices.getUserById(Number(req.params.id))
        res.status(200).send(result)
        
    } catch (error) {
        res.send(error)
        
    }
}


const updateUserInfo = async(req:Request, res: Response) =>{
    try {
        const result = await userServices.updateUserInfo(Number(req.params.id), req.body)
        res.status(200).send(result)
        
    } catch (error) {
        res.send(error)
        
    }
}
const deleteUser = async(req:Request, res: Response) =>{
    try {
        const result = await userServices.deleteUser(Number(req.params.id))
        if(result){
            res.status(200).send("User Deleted Successfully")
        }
        
        
    } catch (error) {
        res.send(error)
        
    }
}



export const userControllers = {
    createUser,
    getAllUser,
    getUserById,
    updateUserInfo,
    deleteUser
}
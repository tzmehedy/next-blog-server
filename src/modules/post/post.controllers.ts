import { Request, Response } from "express";
import { postServices } from "./post.services";

const createPost = async(req: Request, res: Response) =>{
    try {
        const result = await postServices.createPost(req.body)
        res.status(201).send(result)

    } catch (error) {
        res.send(error)
    }
}
const getAllPost = async(req: Request, res: Response) =>{
    try {
        const result = await postServices.getAllPost()
        res.status(200).send(result)

    } catch (error) {
        res.send(error)
    }
}
const getPostById = async(req: Request, res: Response) =>{
    try {
        const result = await postServices.getPostById(Number(req.params.id))
        res.status(200).send(result)

    } catch (error) {
        res.send(error)
    }
}


export const postControllers = {
    createPost,
    getAllPost,
    getPostById
}
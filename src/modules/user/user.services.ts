import { prisma } from "../../config/db";
import { Prisma, User } from "../../generated/prisma/client";

const createUser = async(payload: Prisma.UserCreateInput): Promise<Partial<User>>=>{
    const createUser = await prisma.user.create({
        data: payload,
        select: {
            name: true,
            email: true,
            phone: true,
            photo: true,
            role: true,
            isActive: true,
            isVerified: true,
            createdAt: true
        }
    })

    return createUser
}

const getAllUser = async() =>{
    const allUsers = await prisma.user.findMany({
        select: {
            name: true,
            email: true,
            phone: true,
            photo: true,
            role: true,
            isActive: true,
            isVerified: true,
            createdAt: true,
            posts: true
        }
    })

    return allUsers
} 

const getUserById = async(id: number) =>{
    const singleUser = await prisma.user.findUnique({
        where: {id},
        select: {
            name: true,
            email: true,
            phone: true,
            photo: true,
            role: true,
            isActive: true,
            isVerified: true,
            createdAt: true,
            posts: true
        }
    })

    return singleUser
}

const updateUserInfo = async(id: number, payload:Partial<User>) =>{

    const updatedUserInfo = await prisma.user.update({
        where: {id},
        data: payload,
        select: {
            name: true,
            email: true,
            phone: true,
            photo: true,
            role: true,
            isActive: true,
            isVerified: true,
            createdAt: true,
            updatedAt: true

        }
    })

    return updatedUserInfo 

}

const deleteUser = async(id: number) =>{
    const result = await prisma.user.delete({
        where: {id}
    })

    return result
}


export const userServices = {
    createUser,
    getAllUser,
    getUserById,
    updateUserInfo,
    deleteUser
    
}
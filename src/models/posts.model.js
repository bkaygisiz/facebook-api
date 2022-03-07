import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const createOne = async (id, message) => {
    const newPost = await prisma.post.create({
        data: {
            message,
            authorId: id
        }
    })

    await prisma.user.update({
        where: {id},
        data: {
            Posts: {
                connect: {
                    id: newPost.id
                }
            } 
        }
    })
    return newPost;
}

export const getPost = async(id) => {
    try {
        return await prisma.post.findUnique({
            where: { 
                id: parseInt(id)
            }
        })
    } 
    catch(e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError){
            return(404);
        }
    }
}

export const getPosts = async(idUser) => {
    return await prisma.user.findUnique({
        where: {id: idUser},
        select: {
            Posts: true
        }
    })
}

export const updatePost = async(idPost, message) => {
    return await prisma.post.update({
        where: {
            id: parseInt(idPost)
        },
        data: {
            message
        }
    })
}

export const deletePost = async(idPost) => {
    try {
        await prisma.post.delete({
            where: {
                id: parseInt(idPost)
            }
        })
        return(200);
    }
    catch(e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError){
            return(404);
        }
    }
}
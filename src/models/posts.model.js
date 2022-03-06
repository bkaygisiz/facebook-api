import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const createOne = async (id, message) => {
    const newPost = await prisma.post.create({
        data: {
            message,
            authorId: id
        }
    })

    const updateAuthor = await prisma.user.update({
        where: {id},
        data: {
            Posts: {
                connect: {
                    id: newPost.id
                }
            } 
        }
    })
    console.log(updateAuthor);
    return newPost;
}

export const getPost = async(id) => {
    return await prisma.post.findUnique({
        where: { id: parseInt(id) }
    })
}

export const getPosts = async(idUser) => {
    return await prisma.user.findUnique({
        where: {id: idUser},
        select: {
            Posts: true
        }
    })
}
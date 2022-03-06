import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const createOne = async (id, message) => {
    const newPost = await prisma.post.create({
        data: {
            message,
            authorId: id
        }
    })
    return newPost;
}
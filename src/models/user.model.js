import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const getProfile = (id) => {
    return prisma.profile.findUnique({
        where: {
            userId: id
        }
    })
}

export const patchProfile = async (id, firstName, lastName) => {
    try {
        return await prisma.profile.update({
            where: {
                userId: id
            },
            data: {
                firstName,
                lastName
            }
        })
    }
    catch(e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError){
            return(404);
        }
    }
}

export const deleteProfile = async (id) => {
    try {
        await prisma.profile.delete({
            where: {
                userId: id
            }
        })
    }
    catch(e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError){
            return(404);
        }
    }
    prisma.user.delete({
        where: {
            id: id
        }
    })
    return(200)
}

export const getPosts = (id) => {
    return prisma.post.findMany({
        where: {
            authorId: id
        }
    })
}
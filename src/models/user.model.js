import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProfile = (id) => {
    return prisma.profile.findUnique({
        where: {
            userId: id
        }
    })
}

export const patchProfile = (id, firstName, lastName) => {
    return prisma.profile.update({
        where: {
            userId: id
        },
        data: {
            firstName,
            lastName
        }
    })
}
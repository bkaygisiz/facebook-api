import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const register = (email, password) => {
    return prisma.user.create({
        data: {
            email,
            password
        }
    })
}
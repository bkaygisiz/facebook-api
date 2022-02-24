import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = ({client, total, user, userId}) => {
    return prisma.invoice.create({
        data: {
            client,
            total,
            user,
            userId
        }
    })
}
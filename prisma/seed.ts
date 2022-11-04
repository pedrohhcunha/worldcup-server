import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            avatarUrl: 'https://github.com/johndoe.png',
        },
    });

    const pool = await prisma.pool.create({
        data: {
            title: 'Example pool',
            code: 'BOOL00',
            ownerId: user.id,
            participants: {
                create: [
                    {
                        userId: user.id,
                    }
                ]
            },
        },
    });


    await prisma.game.create({
        data: {
            date: '2022-11-05T12:00:00.000Z',
            firstTeamCountryCode: 'DE',
            SecondTeamCountryCode: 'FR',
        },
    });

    await prisma.game.create({
        data: {
            date: '2022-11-06T12:00:00.000Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'BR',
        },
    });

}


main();
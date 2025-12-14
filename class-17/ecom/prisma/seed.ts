import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
    adapter,
});

const categoryData: Prisma.CategoryCreateInput[] = [
    {
        name: "Electronics",
        products: {
            create: [
                {
                    name: "Laptop",
                    price: 80000,
                    description: "HP Laptop",
                }
            ],
        },
    },
    {
        name: "Clothing",
        products: {
            create: [
                {
                    name: "T-Shirt",
                    price: 1000,
                    description: "T-Shirt",
                }
            ],
        },
    },
];

export async function main() {
    for (const c of categoryData) {
        await prisma.category.create({ data: c });
    }
}

main();
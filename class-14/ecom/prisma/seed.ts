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
          name: "Iphone 17 Pro Max",
          description: 'Iphone 17 Pro Max description',
          price: 170000,
          status: 1,
        },
      ],
    },
  },
  {
    name: "Clothing",
    products: {
      create: [
        {
          name: 'T-Shirt',
          description: 'T-Shirt description',
          price: 1000,
          status: 1,
        },
      ],
    },
  },
];

export async function main() {
  for (const cat of categoryData) {
    await prisma.category.create({ data: cat });
  }
}

main();
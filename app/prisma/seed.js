const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const shoppingData = [
  {
    name: 'Milk',
  },
  {
    name: 'Soap',
  },
  {
    name: 'Cookies',
  },
]

async function main() { 
  console.log(`Start seeding ...`)
  for (const d of shoppingData) {
    const item = await prisma.shoppingitem.create({
      data: d,
    })
    console.log(`Created shopping item with id: ${item.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => { 
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
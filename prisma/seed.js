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
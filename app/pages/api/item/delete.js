// POST request to /api/item

import { Router } from 'next/dist/client/router'
import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  console.log(req.body)
  const { id } = req.body
  const result = await prisma.shoppingitem.delete(
    {
      where: { id: Number(id) }
    }
  )
  res.json(result)
}
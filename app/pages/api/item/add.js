// POST request to /api/item

import { Router } from 'next/dist/client/router'
import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const { item_name } = req.body
  const result = await prisma.shoppingitem.create({
    data: { name: item_name },
  })
  res.json(result)
  return Router.push('/')
}
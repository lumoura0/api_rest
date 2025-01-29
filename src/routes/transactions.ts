import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    // { title, amount, type: credit or debit }
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })
    // Validate the request body
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    // Create a new transaction
    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    // HTTP Codes - 201 Created
    return reply.status(201).send()
  })
}

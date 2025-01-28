import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()
// GET, POST, PUT, PATCH, DELETE
// ('transactions')
//     .insert({
//       id: crypto.randomUUID(),
//       title: 'Transação de teste',
//       amount: 1000,
//     })
//     .returning('*')
app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })

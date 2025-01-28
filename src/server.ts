import fastify from 'fastify'

const app = fastify()
// GET, POST, PUT, PATCH, DELETE
app.get('/hello', () => {
  return 'Hello'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })

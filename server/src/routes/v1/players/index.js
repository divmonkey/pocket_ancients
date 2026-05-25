import { createPlayerModel } from '../../models/playerModel.js'

export default async function playerRoutes(fastify, options) {
  const playerModel = createPlayerModel(fastify.pg)

  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params
    const player = await playerModel.findById(id)
    
    if (!player) {
      return reply.code(404).send({ error: 'Player not found' })
    }
    
    return player
  })

  fastify.post('/', async (request, reply) => {
    const { name } = request.body
    if (!name) {
      return reply.code(400).send({ error: 'Name is required' })
    }
    
    const player = await playerModel.create(name)
    return reply.code(201).send(player)
  })
}

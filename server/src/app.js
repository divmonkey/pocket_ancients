import Fastify from 'fastify'
import cors from '@fastify/cors'
import postgres from '@fastify/postgres'
import redis from '@fastify/redis'
import playerRoutes from './routes/v1/players/index.js'

export async function buildApp(opts = {}) {
  const app = Fastify(opts)

  // Plugins
  await app.register(cors, { origin: true })
  
  await app.register(postgres, {
    connectionString: process.env.DATABASE_URL
  })

  await app.register(redis, {
    url: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
  })

  // Register Routes
  await app.register(playerRoutes, { prefix: '/api/v1/players' })

  return app
}

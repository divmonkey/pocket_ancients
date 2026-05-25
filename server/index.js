import { buildApp } from './src/app.js'
import dotenv from 'dotenv'

dotenv.config()

const start = async () => {
  const app = await buildApp({
    logger: {
      level: 'info',
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  try {
    const port = process.env.PORT || 3000
    await app.listen({ port, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()

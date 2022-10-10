import express, { json } from 'express'
import { db } from './database/db'
import { router } from './routes'

const app = express()
const port = 3000

app.use(json())
app.use(router)

app.listen(port, async () => {
  await db.sync()
  console.log(`Server running at ${port}`)
})

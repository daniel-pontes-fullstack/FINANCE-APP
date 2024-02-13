import express from 'express'
import 'dotenv/config.js'

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () =>
    console.log('🚀🚀 Server listening on port 8080 🚀🚀')
)

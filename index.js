import express from 'express'
import 'dotenv/config.js'

import { pool } from './src/db/postgres/helper.js'

const app = express()
app.get('/', async (req, res) => {
    const client = await pool.connect()
    const results = await client.query('SELECT * FROM users;')

    res.send(JSON.stringify(results.rows))
})

app.listen(3000, () => console.log('listening on port 3000'))

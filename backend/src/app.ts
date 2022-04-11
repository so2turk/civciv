import 'dotenv/config'
import express from 'express'
import('./utils/db-connection')

const app = express()

const port = process.env.PORT || 5050
app.listen(port, () => console.log(`Listening on port ${port}`))

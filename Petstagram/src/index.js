import express from 'express'
import { routes } from './routes.js'

const PORT = 5000
const app = express()

app.use(
    express.static('public'),
    express.urlencoded({ extended: false }),
)

app.use(routes)

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))
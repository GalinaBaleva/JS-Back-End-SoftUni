import express from 'express'
const routes = express.Router()


//TODO: add controller routes

routes.get('/', (req, res) => {
    res.send('First action')
})

export { routes }
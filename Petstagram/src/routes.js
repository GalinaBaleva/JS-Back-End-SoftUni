import express from 'express'
const router = express.Router()

import { homeController } from './controllers/homeController.js'

router.use(homeController)


export { router as routes }
import express from 'express'
import UserController from './controlers/UserController'

const router = express.Router()

// C
router.post('/users', UserController.create)

// R
router.get('/users', UserController.findAll)

// R
router.get('/users/:id', UserController.findOne)

// U
router.put('/users/:id', UserController.update)

// D
router.delete('/users/:id', UserController.destroy)

export { router }

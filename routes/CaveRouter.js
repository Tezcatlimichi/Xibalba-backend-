const Router = require('express').Router()
const controller = require('../controllers/CaveController')

Router.get('/', controller.GetCaves)
Router.get('/:id', controller.GetOneCave)
Router.post('/', controller.NewCave)
Router.put('/:id', controller.UpdateCave)
Router.delete('/:id', controller.DeleteCave)

module.exports = Router

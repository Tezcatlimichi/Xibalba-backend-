const Router = require('express').Router()
const controller = require('../controllers/FuanaController')

Router.get('/', controller.GetFuana)
Router.get('/:id', controller.SingleFuana)
Router.delete('/:id', controller.DeleteFuana)

module.exports = Router

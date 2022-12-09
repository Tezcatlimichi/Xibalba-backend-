const Router = require('express').Router()
const controller = require('../controllers/UnderwaterController')

Router.get('/', controller.GetUnderwaterCaves)
Router.get('/:id', controller.GetOneUnderwaterCave)
// Router.post('/', controller.NewUnderwaterCave)
// Router.put('/:id', controller.UpdateUnderwaterCave)
// Router.delete('/:id', controller.DeleteUnderwaterCave)
module.exports = Router

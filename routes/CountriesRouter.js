const Router = require('express').Router()
const controller = require('../controllers/CountriesController')

Router.get('/', controller.GetCountries)
Router.delete('/:id', controller.DeleteCountry)
Router.get('/:id', controller.CavesInCountry)
Router.get('/:id/cave/:caveId', controller.GetCaveInCountry)
Router.get('/:id/underwater/:caveId', controller.GetUnderwaterCaveInCountry)

module.exports = Router

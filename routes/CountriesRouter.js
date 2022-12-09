const Router = require('express').Router()
const controller = require('../controllers/CountriesController')

Router.get('/', controller.GetCountries)
Router.delete('/:id', controller.DeleteCountry)
Router.get('/:id', controller.CavesInCountry)

module.exports = Router

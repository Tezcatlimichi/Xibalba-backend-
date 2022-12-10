const { Countries } = require('../models')
const { Cave } = require('../models')
const { Underwater } = require('../models')

const GetCaveInCountry = async (req, res) => {
  try {
    let countryId = parseInt(req.params.id)
    let caveId = parseInt(req.params.caveId)
    const cave = await Countries.findOne({
      where: { id: countryId },
      include: [
        {
          model: Cave,
          where: { id: caveId }
        }
      ]
    })
    res.send(cave)
  } catch (error) {
    throw error
  }
}

///...
const CavesInCountry = async (req, res) => {
  try {
    let countryId = parseInt(req.params.id)
    const caves = await Countries.findAll({
      where: { id: countryId },
      include: [Underwater, Cave]
    })
    res.send(...caves)
  } catch (error) {
    throw error
  }
}

const GetCountries = async (req, res) => {
  try {
    const countries = await Countries.findAll()
    res.send(countries)
  } catch (error) {
    throw error
  }
}

const DeleteCountry = async (req, res) => {
  try {
    await Countries.destroy({ where: { id: req.params.id } })
    res.send({
      message: `Country has been successfully deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCountries,
  DeleteCountry,
  CavesInCountry,
  GetCaveInCountry
}

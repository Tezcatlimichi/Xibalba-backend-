const { Countries } = require('../models')

const GetCountries = async (req, res) => {
  try {
    const countries = await Countries.findAll()
    res.send(countries)
  } catch (error) {
    throw error
  }
}

// const GetSingleCountry = async (req, res) => {
//   try {
//     let countryId = parseInt(req.params.id)
//     const country = await Countries.findOne({ where: { id: countryId } })
//     res.send(country)
//   } catch (error) {
//     throw error
//   }
// }
// const DeleteCountry = async (req, res) => {
//   try {
//     await Countries.destroy({ where: { id: req.params.id } })
//     res.send({
//       message: `Country has been successfully deleted`
//     })
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetCountries
  // GetSingleCountry,
  // DeleteCountry
}

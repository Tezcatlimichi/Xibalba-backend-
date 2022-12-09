const { Underwater } = require('../models')

const GetUnderwaterCaves = async (req, res) => {
  try {
    const underwaterCaves = await Underwater.findAll()
    res.send(underwaterCaves)
  } catch (error) {
    throw error
  }
}

const GetOneUnderwaterCave = async (req, res) => {
  try {
    let underwaterId = parseInt(req.params.id)
    const singleCave = await Underwater.findOne({ where: { id: underwaterId } })
    res.send(singleCave)
  } catch (error) {
    throw error
  }
}
//Create
const NewUnderwaterCave = async (req, res) => {
  try {
    let data = {
      ...req.body
    }
    let cave = await Underwater.create(data)
    res.send(cave)
  } catch (error) {
    throw error
  }
}
//update
const UpdateUnderwaterCave = async (req, res) => {
  try {
    let caveId = parseInt(req.params.id)
    const updated = await Underwater.update(req.body, {
      where: { id: caveId },
      returning: true
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}

//delete
const DeleteUnderwaterCave = async (req, res) => {
  try {
    await Underwater.destroy({ where: { id: req.params.id } })
    res.send({
      message: `Cave has been successfully deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUnderwaterCaves,
  GetOneUnderwaterCave,
  NewUnderwaterCave,
  UpdateUnderwaterCave,
  DeleteUnderwaterCave
}

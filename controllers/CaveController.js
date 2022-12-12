const { Cave } = require('../models')

const CavesInProfile = async (req, res) => {
  try {
    let id = parseInt(req.params.id)
    const allCaves = await Cave.findAll({
      where: { profileId: id }
    })
    res.send(allCaves)
  } catch (error) {
    throw error
  }
}

//read
const GetCaves = async (req, res) => {
  try {
    const allCaves = await Cave.findAll()
    res.send(allCaves)
  } catch (error) {
    throw error
  }
}

const GetOneCave = async (req, res) => {
  try {
    let caveId = parseInt(req.params.id)
    const singleCave = await Cave.findOne({ where: { id: caveId } })
    res.send(singleCave)
  } catch (error) {
    throw error
  }
}
//Create
const NewCave = async (req, res) => {
  try {
    let data = {
      ...req.body
    }
    let cave = await Cave.create(data)
    res.send(cave)
  } catch (error) {
    throw error
  }
}
//update
const UpdateCave = async (req, res) => {
  try {
    let caveId = parseInt(req.params.id)
    const updated = await Cave.update(req.body, {
      where: { id: caveId },
      returning: true
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}

//delete
const DeleteCave = async (req, res) => {
  try {
    await Cave.destroy({ where: { id: req.params.id } })
    res.send({
      message: `Cave has been successfully deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCaves,
  GetOneCave,
  NewCave,
  UpdateCave,
  DeleteCave,
  CavesInProfile
}

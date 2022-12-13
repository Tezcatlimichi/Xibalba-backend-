const { Fuana } = require('../models')

const UpdateFuana = async (req, res) => {
  try {
    let fuanaId = parseInt(req.params.id)
    const updated = await Fuana.update(req.body, {
      where: { id: fuanaId },
      returning: true
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}

const GetFuana = async (req, res) => {
  try {
    const fuana = await Fuana.findAll()
    res.send(fuana)
  } catch (error) {
    throw error
  }
}

const SingleFuana = async (req, res) => {
  try {
    let fuanaId = parseInt(req.params.id)
    const single = await Fuana.findOne({ where: { id: fuanaId } })
    res.send(single)
  } catch (error) {
    throw error
  }
}
const DeleteFuana = async (req, res) => {
  try {
    await Fuana.destroy({ where: { id: req.params.id } })
    res.send({
      message: `Animal has been successfully deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFuana,
  SingleFuana,
  DeleteFuana,
  UpdateFuana
}

const  Doctors = require( '../models/doctors')

const newPhysician =  (req,res)=>{
  const { name, email, password } = req.body
  if (!!name && !!email && !!password) {

    Doctors.create({
      name,
      email,
      password
    })
    .then(doctor => res.json(doctor).status(202))
    .catch(err=>res.status(404))
  } else {
    res.json({msg:"Faltam dados"}).status(404)
  }


}

const listAllPhysician =  (req, res) => {
  Doctors.findAll().then(result => {
    res.json(result).status(202)
  }).catch(err => {
    res.status(404)
  })
}
const updatePhysician = (req, res) => {
  const { name, email, password } = req.body
  const { id } = req.params

  Doctors.update({
    name,
    email,
    password
  }, { where: {id} })
  .then(result => {
    res.json(result).status(202)
  }).catch(err => {
    res.status(404)
  })
}
const deletePhysician = (req, res) => {
  const { id } = req.params

  Doctors.destroy( { where: {id} })
  .then(result => {
    res.json(result).status(202)
  }).catch(err => {
    res.status(404)
  })
}

module.exports = {
  newPhysician,
  listAllPhysician,
  updatePhysician,
  deletePhysician
}
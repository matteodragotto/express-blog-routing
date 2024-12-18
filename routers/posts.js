const express = require('express')
const router =  express.Router()

//index
router.get('/', (req, res) =>{
  res.send('Mostro la lista dei post')
})

//show
router.get('/:id', (req,res) =>{
  res.send(`Mostro il post con id ${req.params.id}`)
})

//store
router.post('/', (req,res) =>{
  res.send('Aggiungo un nuovo post')
})

//update

router.put('/:id', (req,res) =>{
  res.send(`Modifico il post con id ${req.params.id}`)
})

//modify
router.patch('/:id', (req,res) =>{
  res.send(`Modifico parzialmente il post con id ${req.params.id}`)
})

//destroy
router.delete('/:id', (req,res) =>{
  res.send(`Cancello il post con id ${req.params.id}`)
})

module.exports = router
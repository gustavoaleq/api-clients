const express = require('express')
const routes = express.Router()
const db = require('../config/db')

routes.get('/', (req, res)=>{
    res.status(200).json({message: 'Welcome to the principally route! 🏆'})
})

routes.get('/clients', (req, res)=> {
    return res.send(db)
})

routes.post('/clients', (req, res)=>{
    const newClient = req.body

    if(!newClient){
        return res.status(400).end()
    }

    db.push(newClient)
    return res.status(200).send(newClient)
})

routes.delete('/clients/:id', (req, res)=> {
    const id = req.params.id
    
    let newDB = db.filter(item=> {
        if(!item[id])
        return item
    })

    return res.send(newDB)
})

module.exports = routes
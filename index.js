const express = require('express')
const mongoose = require('mongoose')
const model = require('./koderModel')

const server = express()

let kodersData;

const DB_USER = 'angel'
const DB_PASSWORD = 'admin123'
const DB_HOST = 'kodemia.uh8t8.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

//middlewares

server.use(express.json())


//get koders by gender
server.get('/koders', async (req,res)=>{
    const g = req.query


    console.log(g)    
    const allKoders = await model.find(g)
    res.json({
        message : "all koders",
        success :  true,
        data : {
            koders : allKoders
        }
    })
})

server.post('/koders', (req,res)=>{

    const name = req.body.name
    const lastName = req.body.lastName
    const age = req.body.age
    const gender = req.body.gender
    
    const newKoder = {name,lastName,age,gender}

        model.create(newKoder)

    res.json({
        message : 'koder created successfully',
        })
})

mongoose.connect(url , { useNewUrlParser : true, useUnifiedTopology : true })
.then((conn) => {
    console.log('db connected')
    server.listen(8080, ()=> {
        console.log('server is listening');
    })        
})
.catch((err)=> {
    console.log('err', err);
})


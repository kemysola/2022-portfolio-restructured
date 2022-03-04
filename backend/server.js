const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const Joi = require('joi')



//Middleware .........................

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'))
app.use(cors())


app_port = process.env.APP_PORT

//Setting the routea ........................

app.get('/api/v1/message', (req,res) =>{
    res.send('My Portfolio Server has started  here')
})


app.post('/api/v1/message',(req,res) =>{
    const {email, message} = req.body;
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        message: Joi.string().required()
        
    })
    Joi.ValidationError(req.body,schema, (err,result)=>{
        if(err){
            res.send('an error has occurred')
        }
        res.send('Your message has been sent')
    })

})
app.listen(app_port, () =>{
    console.log(`My portfolio page has started running on this server : ${app_port}`)
})
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes/books.routes.js'
import dotenv from 'dotenv'
dotenv.config();
const app=express()
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())

const port=process.env.port || 8000;

mongoose.connect(process.env.MONGO_URL)
.then(
    ()=>{app.listen(port,()=>{
        console.log(`app is listening on http://localhost:${port}`)
    })}
).catch(error=>{console.log(error);})

app.use('/',router)
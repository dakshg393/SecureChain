import express from "express"
// import contract from "./contract/contract.js"
import dotenv from "dotenv"


const app = express()
app.use(express.json())

app.post('/signup',async(req,res)=>{

})

app.post('/login',async(req,res)=>{

})

app.post('/storedoc',async(req,res)=>{

})

app.post('/verifyDoc',async(req,res)=>{

})

export default app
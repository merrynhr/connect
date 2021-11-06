import Express from "express"
import Months from "./months.js"

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = Express()
const port = 3000

//ROUTING - START

app.get("/", (req, res)=>{
  
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

//ROUTING - END

app.listen(port,()=>{console.log("The Web Server is now listening on port: "+port)})


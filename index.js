import Express from "express"
import Months from "./months.js"

const app = Express()
const port = 3000

//ROUTING - START

app.get("/", (req, res)=>{
  console.log("Home page")

  let output = ""
  Months.forEach(month=> {
    output += `<li>${month}</li>`
  })
  res.send(output)
})

app.get("/about", (req, res)=>{
  console.log("About page")
  res.send("Welcome to the about site!")
})
//ROUTING - END

app.listen(port,()=>{console.log("The Web Server is now listening on port: "+port)})


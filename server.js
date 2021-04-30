const express = require("express")
const cors = require('cors')

const app = express()
app.use(cors())

app.listen(80,"0.0.0.0",() => {
  console.log("Server is listening on port 80")
})

app.get('/api',(req,res) => {
  const currDate = new Date()
  const unix = Number(currDate)
  const utc = currDate.toUTCString()
    res.json({unix,utc})
})

app.get('/api/:date',(req,res)=>{
  let date = req.params['date']
  if(!isNaN(Number(date)))
    date = Number(date)

  const dateObj = new Date(date)
  if(dateObj.toString() === "Invalid Date")
    res.json({error : "Invalid Date"})
  else {
    const unix = Number(dateObj)
    const utc = dateObj.toUTCString()
    res.json({unix,utc})
  }
})
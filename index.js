const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.get('/external/users', (req, res) => {
  res.status(200).json({
    message: "SUCCESS",
    data: {
      users: [
        {
          name: "David Smith",
          age: 30
        },
        {
          name: "John Salmon",
          age: 31
        },
        {
          name: "Katy Grace",
          age: 22
        }
      ]
    }
  });
})

app.get('/external/', (req, res) => {
  res.status(200).json({message: "This is an external api response"});
})

app.get('/internal/', (req, res) => {
  res.status(200).json({message: "This is an internal api response"});
})

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
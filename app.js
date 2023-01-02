const express = require("express")

const app = express()

const port = 2405

app.use(express.static("./public"))

app.listen(port,console.log(`App is runing on http://localhost:${port}`))

const express = require("express")
const app = express()
const port = 2405
const tasksRoutes = require("./routes/tasks")

//middleware
app.use(express.json())

//routes
app.use(express.static("./public"))
app.use("/api/v1/tasks", tasksRoutes)

//listen
app.listen(port,console.log(`App is runing on http://localhost:${port}`))

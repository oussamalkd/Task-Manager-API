const express = require("express")
const app = express()
const port = 2405
const tasksRoutes = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()

//middleware
app.use(express.json())

//routes
app.use(express.static("./public"))
app.use("/api/v1/tasks", tasksRoutes)

// connet to Database
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        //listen
        app.listen(port,console.log(`App is runing on http://localhost:${port}`))
    }
    catch (error) {
        console.log(error);
    }
}

start()

const express = require("express")
const app = express()
const port = 2405
const tasksRoutes = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()
const notFound = require("./middleware/not-found")

//middleware
app.use(express.json())
app.use(express.static("./public"))

//routes
app.use("/api/v1/tasks", tasksRoutes)
app.use(notFound)

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

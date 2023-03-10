const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 2405
const tasksRoutes = require("./routes/tasks")
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")
const errorHandllerMiddleware = require("./middleware/errorHandller")

//middleware
app.use(express.json())
app.use(express.static("./public"))

//routes
app.use("/api/v1/tasks", tasksRoutes)
app.use(notFound)
app.use(errorHandllerMiddleware)

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

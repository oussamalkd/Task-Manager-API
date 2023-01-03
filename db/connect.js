const mongoose = require("mongoose")

const connectionString = "mongodb+srv://oussamaLkdTaskManager:TaskManager24052023@expressprojects.lhnbjxr.mongodb.net/task-manager?retryWrites=true&w=majority"


const connectDB = (url) => {
    mongoose.set('strictQuery',false);
    mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
}

module.exports = connectDB

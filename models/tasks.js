const mongoose = require("mongoose")


const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Task nam is required"],
        trim: true,
        maxLength: [20, "can't be bigger than 20 characters"],
        minLength: [3, "name must have at least 3 charachters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model("Tasks", taskSchema)

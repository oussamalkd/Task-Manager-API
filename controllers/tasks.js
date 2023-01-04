const Task = require("../models/tasks");

const getAllTasks = (req, res) => {
    res.send("Gett all tasks")
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({success: true, data: task})
    }
    catch (error) {
        res.status(422).json({success: false, errors: error})
    }

}

const getTask = (req, res) => {
    res.send("single Task")
}

const updateTask = (req, res) => {
    res.send("Update Task")
}

const deleteTask = (req, res) => {
    res.send("Delete Task")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}

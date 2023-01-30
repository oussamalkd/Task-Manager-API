const { json } = require("express");
const Task = require("../models/tasks");
const asyncWrraper = require("../middleware/asyncWrapper")

const getAllTasks = asyncWrraper( async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ success: true, data: tasks})
})

const createTask = asyncWrraper( async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({success: true, data: task})
})

const getTask = asyncWrraper( async (req, res) => {
    const task = await Task.findOne({_id: req.params.id})
    if(!task) {
        return res.status(404).json({msg: "The Task that you're looking for is removed or doesn't exist"})
    }
    res.status(200).json({success: true, data: task})
})

const updateTask = asyncWrraper( async (req, res) => {
    
    const task = await Task.findByIdAndUpdate(
        { _id: req.params.id}, req.body,{ new: true,  runValidators: true })
    if(!task) {
        return res.status(404).json({msg: "The Task that you're looking for is removed or doesn't exist"})
    }
    res.status(200).json({success: true, data: task})
})

const deleteTask = asyncWrraper( async (req, res) => {
    const task = await Task.findOneAndDelete({_id: req.params.id})
    if(!task) {
        return res.status(404).json({ success: false, msg: "task not found"})
    }
    res.status(200).json({ success: true, msg: "Task deleted successfuly"})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}

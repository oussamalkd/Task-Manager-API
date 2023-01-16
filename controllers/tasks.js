const { json } = require("express");
const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ success: true, data: tasks})
    } catch (error) {
        res.status(500).json({success: false, errors: error})
    }
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

const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({_id: req.params.id})
        if(!task) {
            return res.status(404).json({msg: "The Task that you're looking for is removed or doesn't exist"})
        }
        res.status(200).json({success: true, data: task})
    } catch (error) {
        res.status(500).json({success: false, errors: error})
    }
}

const updateTask =  async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            { _id: req.params.id}, req.body,{ new: true,  runValidators: true })
        if(!task) {
            return res.status(404).json({msg: "The Task that you're looking for is removed or doesn't exist"})
        }
        res.status(200).json({success: true, data: task})
    } catch (error) {
        res.status(500).json({success: false, errors: error})
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({_id: req.params.id})
        if(!task) {
            return res.status(404).json({ success: false, msg: "task not found"})
        }
        res.status(200).json({ success: true, msg: "Task deleted successfuly"})
    } catch (error) {
        res.status(500).json({ success: false, error: error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}

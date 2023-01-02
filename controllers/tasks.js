const getAllTasks = (req, res) => {
    res.send("Gett all tasks")
}

const createTask = (req, res) => {
    res.send("create Task")
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

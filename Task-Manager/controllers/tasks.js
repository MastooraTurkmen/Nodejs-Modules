const Task = require('../models/Task')
const asyncWrappers = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrappers(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const createTask = asyncWrappers(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task });
})

const getTask = asyncWrappers(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
        return next(createCustomError(`no task with id: ${taskId}`, 404))
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrappers(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true,
    });

    if (!task) {
        return next(createCustomError(`no task with id: ${taskId}`, 404))
    }

    res.status(200).json({ task })
})

const deleteTask = asyncWrappers(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
        return next(createCustomError(`no task with id: ${taskId}`, 404))
    }
    res.status(200).json({ task })
})

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }
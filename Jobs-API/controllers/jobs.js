const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')


const getAllJobs = async (req, res) => {
    res.send('getAllJobs user')
}

const getJob = async (req, res) => {
    res.send('get job user')
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json(job)
}

const updateJob = async (req, res) => {
    res.send('update job user')
}

const deleteJob = async (req, res) => {
    res.send('deleteJob user')
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }
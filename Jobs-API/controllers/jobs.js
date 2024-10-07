const getAllJobs = async (req, res) => {
    res.send('getAllJobs user')
}

const getJob = async (req, res) => {
    res.send('get job user')
}

const createJob = async (req, res) => {
    res.send('create job')
}

const updateJob = async (req, res) => {
    res.send('update job user')
}

const deleteJob = async (req, res) => {
    res.send('deleteJob user')
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }
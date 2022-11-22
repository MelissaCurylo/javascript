const {Job} = require("./../models/jobs.model")

module.exports.test = (req, res) => {

}


// get all
module.exports.allJobs = (req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json)

}

// get one
module.exports.oneJob = (req, res) => {
    Job.findOne({_id: req.params.id})
        .then(job => res.josn(job))
        .catch(err => res.status(400).json)

}

// create
module.exports.createJob = (req, res) => {
    Job.create(req.body)
        .then(newJob => res.json(newJob))
        .catch(err =>res.status(400).json)

}

// update
module.exports.updateJob = (req, res) => {

}

// delete
module.exports.deleteJob = (req, res) => {
    
}
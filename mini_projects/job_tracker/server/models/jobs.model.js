const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required."],
        minlength: [3, "Title must be at least 3 charcters."]
    },
    company:{
        type: String,
        required: [true, "Company is required."],
        minlength: [3, "Comany name must be at minimum 3 characters."]
    },
    salary: {
        type: Number,
        min: [40000, "Salary must be at minimum $40,000."]
    },
    isRemote:{
        type: Boolean
    },
}, { timestamps: true })

module.exports.Job = mongoose.model('Job', JobSchema)
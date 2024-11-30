const mongoose = require('mongoose');

// Define the schema for job listings
const jobListingSchema = new mongoose.Schema({
    company: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    salary: { type: String, required: true },
    experience: { type: String, required: true }
});

// Create a model based on the schema
const JobListing = mongoose.model('joblisting', jobListingSchema);

module.exports = JobListing;
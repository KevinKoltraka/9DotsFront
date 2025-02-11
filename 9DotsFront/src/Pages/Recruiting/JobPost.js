import React, { useState } from 'react';
import './JobPost.css';

const JobPost = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        salary: '',
        requirements: '',
        companyName: '',
        companyLogo: null,
        deadline: '',
        employmentType: 'full-time',
        jobCategory: '',
        skills: [], // Changed to an array
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSkillsChange = (e) => {
        setFormData({
            ...formData,
            skills: e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill),
        });
    };

    const validateForm = () => {
        const validationErrors = {};
        if (!formData.title) validationErrors.title = 'Job title is required';
        if (!formData.description) validationErrors.description = 'Description is required';
        if (!formData.location) validationErrors.location = 'Location is required';
        if (!formData.salary) validationErrors.salary = 'Salary is required';
        if (!formData.requirements) validationErrors.requirements = 'Requirements are required';
        if (!formData.companyName) validationErrors.companyName = 'Company name is required';
        if (!formData.companyLogo) validationErrors.companyLogo = 'Company logo is required';
        if (!formData.deadline) validationErrors.deadline = 'Application deadline is required';
        if (!formData.jobCategory) validationErrors.jobCategory = 'Job category is required';
        if (formData.skills.length === 0) validationErrors.skills = 'At least one skill is required';
        return validationErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await fetch('http://localhost:5000/post-job', {  // Change here to include the correct port and route
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                alert('Job posted successfully');
                setFormData({
                    title: '',
                    description: '',
                    location: '',
                    salary: '',
                    requirements: '',
                    companyName: '',
                    companyLogo: null,
                    deadline: '',
                    employmentType: 'full-time',
                    jobCategory: '',
                    skills: [], // Resetting skills to empty array
                });
            } else {
                alert('Failed to post job');
            }
        } catch (error) {
            alert('An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderError = (field) => {
        return errors[field] && <p className="error">{errors[field]}</p>;
    };

    return (
        <form onSubmit={handleSubmit} className="job-post-form">
            <h2>Post a Job Offer</h2>

            <div className="form-group">
                <label>Job Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter the job title"
                />
                {renderError('title')}
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide a brief description of the job role"
                />
                {renderError('description')}
            </div>

            <div className="form-group">
                <label>Location</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter job location"
                />
                {renderError('location')}
            </div>

            <div className="form-group">
                <label>Salary</label>
                <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="Enter the salary amount"
                />
                {renderError('salary')}
            </div>

            <div className="form-group">
                <label>Requirements</label>
                <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="List any required qualifications"
                />
                {renderError('requirements')}
            </div>

            <div className="form-group">
                <label>Company Name</label>
                <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter the company's name"
                />
                {renderError('companyName')}
            </div>

            <div className="form-group">
                <label>Company Logo</label>
                <input
                    type="file"
                    name="companyLogo"
                    onChange={handleChange}
                />
                {renderError('companyLogo')}
            </div>

            <div className="form-group">
                <label>Application Deadline</label>
                <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                />
                {renderError('deadline')}
            </div>

            <div className="form-group">
                <label>Employment Type</label>
                <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="freelance">Freelance</option>
                </select>
            </div>

            <div className="form-group">
                <label>Job Category</label>
                <input
                    type="text"
                    name="jobCategory"
                    value={formData.jobCategory}
                    onChange={handleChange}
                    placeholder="Enter the job category"
                />
                {renderError('jobCategory')}
            </div>

            <div className="form-group">
                <label>Skills (comma separated)</label>
                <input
                    type="text"
                    name="skills"
                    value={formData.skills.join(', ')} // Displaying skills as comma separated string
                    onChange={handleSkillsChange}
                    placeholder="Enter required skills, separated by commas"
                />
                {renderError('skills')}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Posting...' : 'Post Job'}
            </button>
        </form>
    );
};

export default JobPost;

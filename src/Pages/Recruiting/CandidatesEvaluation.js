import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CandidatesEvaluation.css';

const CandidatesEvaluation = () => {
  const [candidates, setCandidates] = useState([
    { name: 'John Doe', skill: 'JavaScript', experience: 3, score: 4, status: 'Pending' },
    { name: 'Jane Smith', skill: 'Python', experience: 5, score: 5, status: 'Pending' },
    { name: 'Sam Brown', skill: 'Java', experience: 2, score: 3, status: 'Pending' },
  ]);
  const [filter, setFilter] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleStatusChange = (index, newStatus) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index].status = newStatus;
    setCandidates(updatedCandidates);
  };

  const handleRatingChange = (index, newScore) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index].score = newScore;
    setCandidates(updatedCandidates);
  };

  const handleCandidateSelection = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.skill.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="evaluation-container">
      <h1>Candidate Evaluation at 9Dots</h1>
      
      {/* Introduction Section */}
      <div className="intro-section">
        <p>
          At 9Dots, we understand that selecting the right candidate is crucial to the success of any business. Our candidate evaluation process goes beyond simple resumes – we focus on assessing skills, experience, and how well a candidate aligns with the role and your company's culture. 
        </p>
        <p>
          Using a dynamic approach, we evaluate candidates through a mix of skill assessments, interviews, and feedback. This allows us to help businesses make informed decisions and hire the best talent for their needs.
        </p>
        <p>
          Below is a comprehensive list of how we evaluate each candidate based on key criteria that matter most to your business.
        </p>
      </div>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by Skill"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="evaluation-criteria">
        <h2>Evaluation Criteria</h2>
        <ul>
          <li><strong>Technical Skills:</strong> Proficiency in required technologies.</li>
          <li><strong>Experience:</strong> Years in relevant field.</li>
          <li><strong>Cultural Fit:</strong> Alignment with company values and team dynamics.</li>
          <li><strong>Growth Potential:</strong> Ability to learn and evolve in the role.</li>
        </ul>
      </div>

      <div className="candidate-cards">
        {filteredCandidates.map((candidate, index) => (
          <motion.div
            key={index}
            className="candidate-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => handleCandidateSelection(candidate)}
          >
            <motion.h2 whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              {candidate.name}
            </motion.h2>
            <p>Skill: {candidate.skill}</p>
            <p>Experience: {candidate.experience} years</p>

            {/* Progress Bar */}
            <div className="progress-bar">
              <motion.div
                className="progress"
                style={{ width: `${(candidate.score / 5) * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${(candidate.score / 5) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="rating">
              <label>Rate this Candidate:</label>
              <motion.input
                type="range"
                min="1"
                max="5"
                value={candidate.score}
                onChange={(e) => handleRatingChange(index, e.target.value)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <span>{candidate.score}</span>
            </div>

            <div className="status">
              <label>Status:</label>
              <motion.select
                value={candidate.status}
                onChange={(e) => handleStatusChange(index, e.target.value)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <option value="Pending">Pending</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Rejected">Rejected</option>
              </motion.select>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="evaluation-statistics">
        <h2>Current Candidate Status</h2>
        <p>Total Candidates: {candidates.length}</p>
        <p>Pending: {candidates.filter(candidate => candidate.status === 'Pending').length}</p>
        <p>Interviewed: {candidates.filter(candidate => candidate.status === 'Interviewed').length}</p>
        <p>Shortlisted: {candidates.filter(candidate => candidate.status === 'Shortlisted').length}</p>
        <p>Rejected: {candidates.filter(candidate => candidate.status === 'Rejected').length}</p>
      </div>

      <div className="candidate-actions">
        <motion.button
          className="shortlist-button"
          onClick={() => handleStatusChange(0, 'Shortlisted')}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Shortlist First Candidate
        </motion.button>
        <motion.button
          className="reject-button"
          onClick={() => handleStatusChange(0, 'Rejected')}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Reject First Candidate
        </motion.button>
      </div>

      {selectedCandidate && (
        <div className="candidate-detail">
          <h2>Selected Candidate: {selectedCandidate.name}</h2>
          <p>Skill: {selectedCandidate.skill}</p>
          <p>Experience: {selectedCandidate.experience} years</p>
          <p>Status: {selectedCandidate.status}</p>
        </div>
      )}
    </div>
  );
};

export default CandidatesEvaluation;

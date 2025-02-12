import React, { useState, useEffect } from "react";
import SentimentMeter from "./SentimentMeter";
import KeywordCloud from "./KeywordCloud";
import ReputationChart from "./ReputationChart";
import "./main.scss";

const ReputationManagement = () => {
  const [score, setScore] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => (prev < 90 ? prev + 5 : 50)); // Simulate progress
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <h1>Reputation Management</h1>
      <SentimentMeter score={score} />
      <KeywordCloud />
      <ReputationChart />
    </div>
  );
};

export default ReputationManagement;

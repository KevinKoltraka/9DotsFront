import React from "react";
import WordCloud from "react-wordcloud";
import "./main.scss";

const words = [
  { text: "Excellent Service", value: 50 },
  { text: "Responsive", value: 30 },
  { text: "Delays", value: 20 },
  { text: "Trustworthy", value: 40 },
  { text: "Unreliable", value: 15 },
];

const options = { rotations: 2, rotationAngles: [0, 90], fontSizes: [10, 50] };

const KeywordCloud = () => {
  return (
    <div className="word-cloud">
      <h3>Trending Keywords</h3>
      <WordCloud words={words} options={options} />
    </div>
  );
};

export default KeywordCloud;

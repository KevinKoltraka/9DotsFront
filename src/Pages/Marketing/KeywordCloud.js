import React from "react";
import { Wordcloud } from "@visx/wordcloud";
import { scaleLog } from "d3-scale";
import "./main.scss";

const words = [
  { text: "Excellent Service", value: 50 },
  { text: "Responsive", value: 30 },
  { text: "Delays", value: 20 },
  { text: "Trustworthy", value: 40 },
  { text: "Unreliable", value: 15 },
];

const fontScale = scaleLog()
  .domain([Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))])
  .range([10, 50]); // Font size range

const KeywordCloud = () => {
  return (
    <div className="word-cloud">
      <h3>Trending Keywords</h3>
      <svg width={400} height={300}>
        <Wordcloud
          words={words}
          width={400}
          height={300}
          fontSize={(word) => fontScale(word.value)}
          rotate={() => (Math.random() > 0.5 ? 0 : 90)}
          font={"Arial"}
          padding={5}
          fill={(word) => (word.value > 30 ? "#007BFF" : "#FF5733")} // Customize colors
        />
      </svg>
    </div>
  );
};

export default KeywordCloud;

import React from "react";
import "./MediaProduction.css";
import { Play, Camera, Music, Film } from "lucide-react";

const MediaProduction = () => {
  return (
    <div className="media-production-container">
      <header className="media-header">
        <h1 className="fade-in">Media Production Services</h1>
        <p className="slide-up">
          Bringing ideas to life through video, photography, and audio production.
        </p>
      </header>

      <section className="media-showcase">
        <div className="media-card">
          <Camera size={48} className="icon" />
          <h3>Professional Photography</h3>
          <p>High-resolution photography for branding, products, and events.</p>
        </div>
        <div className="media-card">
          <Film size={48} className="icon" />
          <h3>Video Production</h3>
          <p>From concept to final cut—engaging visuals for all platforms.</p>
        </div>
        <div className="media-card">
          <Music size={48} className="icon" />
          <h3>Audio & Podcasting</h3>
          <p>Professional sound design and podcast editing.</p>
        </div>
      </section>

      <section className="video-preview">
        <h2>See Our Work in Action</h2>
        <div className="video-container1">
          <div className="video-overlay">
            <Play size={60} className="play-icon" />
          </div>
          <video muted loop className="video-bg">
            <source src="/example.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
};

export default MediaProduction;

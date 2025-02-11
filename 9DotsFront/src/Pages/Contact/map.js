// src/components/Map/Map.js
import React from 'react';
import './map.css'; // You can style this map specifically if needed

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23968.064257542068!2d19.782105674316416!3d41.33043870000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350315d5d86521b%3A0xfa19c2578e20f6b6!2sStudio%20Kadare%20%26%20Agolli%20House!5e0!3m2!1sen!2s!4v1738185683780!5m2!1sen!2s"
        width="100%"
        height="500"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      />
    </div>
  );
};

export default Map;

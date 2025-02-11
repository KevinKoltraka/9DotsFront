import React, { useEffect, useRef } from 'react';
import './ContentMarketing.css';
import { Carousel } from 'react-responsive-carousel';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, DoughnutController } from 'chart.js'; // Registering necessary components
import { Pie } from 'react-chartjs-2'; // Pie chart import

// Register the necessary components globally
ChartJS.register(ArcElement, Tooltip, Legend, Title, DoughnutController);

const ContentMarketing = () => {
  const chartRef = useRef(null); // Create a ref for the chart

  const data = {
    labels: ['Content A', 'Content B', 'Content C'],
    datasets: [
      {
        label: 'Performance',
        data: [30, 50, 20],
        backgroundColor: ['#fda085', '#f6d365', '#fd9c85'],
      },
    ],
  };

  useEffect(() => {
    // Store the chartRef.current value in a variable inside the effect to avoid dependency issues
    const currentChart = chartRef.current;

    // Cleanup logic
    return () => {
      if (currentChart) {
        currentChart.destroy();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero5">
        <h1>Content Marketing That Drives Results</h1>
        <a href="#cta" className="cta-button">Get Started</a>
      </section>

      {/* Infographic Section */}
      <section className="infographic">
        <div className="chart">
          {/* Using Pie chart component from react-chartjs-2 */}
          <Pie data={data} ref={chartRef} />
        </div>
        <div className="tooltip">Hover to learn more</div>
      </section>

      {/* Testimonial Carousel */}
      <section className="testimonials">
        <Carousel infiniteLoop autoPlay>
          <div className="quote">
            <p>"Great marketing strategy. Helped us grow!"</p>
            <p>- Client A</p>
          </div>
          <div className="quote">
            <p>"Highly recommend for any business."</p>
            <p>- Client B</p>
          </div>
        </Carousel>
      </section>

      {/* Content Showcase Section */}
      <section className="showcase">
        <div className="image">
          <img src="/viralcontent.png" alt="Content Example" />
        </div>
        <div className="text">
          <h2>Content Marketing Strategies</h2>
          <p>
            Our tailored content strategies help you connect with your audience and increase brand visibility.
          </p>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="client-logos">
        <div className="logo">
          <img src="/Asset 13.png" alt="Client 1" />
          <p>Client 1</p>
        </div>
        <div className="logo">
          <img src="/Asset 31.jpg" alt="Client 2" />
          <p>Client 2</p>
        </div>
        <div className="logo">
          <img src="/Asset 28.jpg" alt="Client 3" />
          <p>Client 3</p>
        </div>
      </section>

      {/* Sticky Footer with CTA */}
      <section className="sticky-footer" id="cta">
        <p>Ready to grow your business with effective content marketing?</p>
        <a href="#contact" className="cta-button">Contact Us</a>
      </section>
    </div>
  );
};

export default ContentMarketing;

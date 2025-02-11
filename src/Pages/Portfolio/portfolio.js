import React, { useState } from 'react';
import './portfolio.css';

// Sample portfolio items with categories and detailed images
const portfolioItems = [
  {
    title: "Social Media Design Posts for Aredo Stones",
    image: "/ballina/Aredo Stones-07.png",  // Front image (thumbnail)
    detailedMedia: ["/portfolio/Aredo Stones/Aredo Stones-01.jpg", "/portfolio/Aredo Stones/Aredo Stones-02.jpg", "/portfolio/Aredo Stones/Aredo Stones-03.jpg", "/portfolio/Aredo Stones/Aredo Stones-04.jpg", "/portfolio/Aredo Stones/Aredo Stones-05.jpg", "/portfolio/Aredo Stones/Aredo Stones-06.jpg",],  // Image when clicked (modal)
    mediaType: "image",
    description: "Aredo Stones",
    category: "Design",
    detailedInfo: "In this project, we designed and developed a fully responsive website with the latest technologies like React.js and Node.js. The focus was on providing a sleek user interface and a fast loading experience."
  },
  {
    title: "Brand Identity Design for GoHealth Albania",
    image: "/ballina/Go Health Brand Identity-01.png",  // Front image (thumbnail)
    detailedMedia: ["/portfolio/Go Health/Go Health Brand Identity-01.png", "/portfolio/Go Health/Go Health Brand Identity-02.png", "/portfolio/Go Health/Go Health Brand Identity-03.png", "/portfolio/Go Health/Go Health Brand Identity-04.png", "/portfolio/Go Health/Go Health Brand Identity-05.png", "/portfolio/Go Health/Go Health Brand Identity-06.png", "/portfolio/Go Health/Go Health Brand Identity-07.png",],
    mediaType: "image",
    description: "FLEX",
    category: "Design",
    detailedInfo: "Our design team created a modern and professional brand identity for GoHealth Albania, a leading dental clinic. The project focused on delivering a clean, approachable, and trustworthy visual identity, ensuring that the clinic stands out in the healthcare industry while making patients feel confident and at ease."
  },
  {
    title: "Shargan Consulting Website",
    image: "/ballina/shargan.jpg",  // Front image (thumbnail)
    detailedMedia: ["/portfolio/sharganfront.png", "/portfolio/sharganserver.png", "/portfolio/sharganserver2.png"],  // Image when clicked (modal)
    mediaType: "image",
    description: "Shargan Consulting",
    category: "Website",
    detailedInfo: "Developed a fully responsive and optimized website for Shargan Consulting, enhancing user experience and performance across all devices. https://sharganconsulting.com/"
  },
  {
    title: "Brand Identity Design for FLEX",
    image: "/ballina/Flex Brand Identity Social Media-01.png",  // Front image (thumbnail)
    detailedMedia: ["/flex/1.jpg", "/flex/2.jpg", "/flex/3.jpg", "/flex/4.jpg", "/flex/5.jpg", "/flex/6.jpg", "/flex/7.jpg", "/flex/8.jpg", "/flex/9.jpg", "/flex/10.jpg"],  // Video when clicked (modal)
    mediaType: "image",
    description: "FLEX",
    category: "Design",
    detailedInfo: "Our design team crafted a distinctive brand identity for FLEX Clothing, including logo design, typography, and a cohesive visual style to enhance brand recognition and appeal."
  },
  {
    title: "BlueMagic Group Recruitment Video – Captured & Edited by Our Team",
    image: "/portfolio/blue magic njoftim pune new.mp4",
    detailedMedia: "/portfolio/blue magic njoftim pune new.mp4", 
    mediaType: "video",
    description: "BlueMagic Group",
    category: "Photograph & VideoEditing",
    detailedInfo: "Filmed and edited by our team, this recruitment video showcases BlueMagic Group's vision and work culture."
  },
  {
    title: "Capturing Excellence: Aredo Stones in Action",
    image: "/portfolio/quartz aredo stones.mp4",
    detailedMedia: "/portfolio/quartz aredo stones.mp4",
    mediaType: "video",
    description: "Aredo Stones",
    category: "Photograph & VideoEditing",
    detailedInfo: "We filmed and edited a professional video showcasing Aredo Stones’ craftsmanship as they transformed a client’s home. From precise quartz selection to flawless installation, our visuals highlight the beauty and quality of their work."
  },
  {
    title: "A New Smile with GoHealth Albania",
    image: "/portfolio/go health short.mp4",
    detailedMedia: "/portfolio/go health short.mp4",
    mediaType: "video",
    description: "GoHealth Albania",
    category: "Photograph & VideoEditing",
    detailedInfo: "We captured and edited a compelling video showcasing the remarkable teeth transformation of a GoHealth Albania client. The footage highlights the before-and-after results, emphasizing the precision and expertise of their dental services."
  },
  {
    title: "Culinary Excellence in Motion: Inside The Kitchen",
    image: "/portfolio/the kitchen reel.mp4",
    detailedMedia: "/portfolio/the kitchen reel.mp4",
    mediaType: "video",
    description: "The Kitchen",
    category: "Photograph & VideoEditing",
    detailedInfo: "Step into The Kitchen's world through this video feature, where our team captured the essence of fine dining and culinary artistry at one of the city's most beloved restaurants."
  },
];

function PortfolioItem({ title, image, description, onClick, mediaType, detailedMedia, isModalActive }) {
  return (
    <div className={`portfolio-item ${isModalActive ? 'modal-active' : ''}`} onClick={onClick}>
      <div className="image-container">
        {mediaType === 'image' ? (
          <img src={image} alt={title} className="portfolio-image" />
        ) : mediaType === 'video' && typeof image === 'string' ? (
          <video src={image} alt={title} className="portfolio-image" controls={false} /> // No controls in front
        ) : mediaType === 'video' && typeof image === 'object' ? (
          <div className="iframe-container">
            <iframe
              src="https://player.vimeo.com/video/1052048745?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="blue magic njoftim pune new"
            />
          </div>
        ) : null}
        <div className="overlay">
          <div className="overlay-text">{description}</div>
        </div>
      </div>
      <div className="details">
        <button onClick={onClick}>View Project</button>
      </div>
    </div>
  );
}

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalActive, setModalActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);  // Reset slider to first image
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
    setSelectedProject(null);
    setCurrentIndex(0);  // Reset index when closing
  };

  const nextSlide = () => {
    if (selectedProject && Array.isArray(selectedProject.detailedMedia) && selectedProject.detailedMedia.length > 1) {
      setCurrentIndex((prevIndex) =>
        prevIndex === selectedProject.detailedMedia.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedProject && Array.isArray(selectedProject.detailedMedia) && selectedProject.detailedMedia.length > 1) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.detailedMedia.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="portfolio-section">
      <h2 className="section-title">Our Portfolio</h2>

      {/* Filter Buttons */}
      <div className="filter-btns">
        <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>All</button>
        <button className={activeCategory === 'Website' ? 'active' : ''} onClick={() => setActiveCategory('Website')}>Website</button>
        <button className={activeCategory === 'Design' ? 'active' : ''} onClick={() => setActiveCategory('Design')}>Design</button>
        <button className={activeCategory === 'Photograph & VideoEditing' ? 'active' : ''} onClick={() => setActiveCategory('Photograph & VideoEditing')}>Photograph & VideoEditing</button>
      </div>

      {/* Portfolio Items */}
      <div className="portfolio-container">
        {filteredItems.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            onClick={() => openModal(item)}
            mediaType={item.mediaType}
            detailedMedia={item.detailedMedia}
            isModalActive={modalActive}
          />
        ))}
      </div>

      {modalActive && selectedProject && (
        <div className="modal active">
          <div className="modal-content2">
            <button className="close-btn" onClick={closeModal}>×</button>
            {selectedProject.mediaType === "image" ? (
              <img src={selectedProject.detailedMedia[currentIndex]} alt={selectedProject.title} className="modal-image" />
            ) : selectedProject.mediaType === "video" && typeof selectedProject.detailedMedia === "string" ? (
              <video src={selectedProject.detailedMedia} alt={selectedProject.title} controls autoPlay muted />
            ) : null}

            <div className="modal-text">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.detailedInfo}</p>
            </div>

            {/* Slider Buttons */}
            {selectedProject.mediaType === "image" && Array.isArray(selectedProject.detailedMedia) && selectedProject.detailedMedia.length > 1 && (
              <>
                <button className="prev-btn" onClick={prevSlide}>❮</button>
                <button className="next-btn" onClick={nextSlide}>❯</button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}


export default Portfolio;
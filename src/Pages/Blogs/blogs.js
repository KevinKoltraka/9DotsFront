import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import { paginate } from './pagination.js';
import { motion } from 'framer-motion';
import "./blog.css";

import image1 from './example.jpg';
import image2 from './example.jpg';

const allArticles = [
  { id: 1, title: 'Feature-Based React Architecture', image: image1, description: 'How React Server Components work...', content: 'Full content of the article...', category: 'React', date: '2024-11-30' },
  { id: 2, title: 'React and FormData', image: image2, description: 'Handling FormData in React...', content: 'Full content of the article...', category: 'React', date: '2024-11-28' },
  { id: 3, title: 'Freelance Web Developer: Charge by Time, Not Value', image: image1, description: 'Should freelancers charge based on time or value?', content: 'Full content of the article...', category: 'Freelance', date: '2024-11-26' },
  { id: 4, title: 'Freelance Web Developer: Charge by Time, Not Value', image: image1, description: 'Should freelancers charge based on time or value?', content: 'Full content of the article...', category: 'Freelance', date: '2024-11-26' },
  { id: 5, title: 'Freelance Web Developer: Charge by Time, Not Value', image: image1, description: 'Should freelancers charge based on time or value?', content: 'Full content of the article...', category: 'Freelance', date: '2024-11-26' },
  { id: 6, title: 'Freelance Web Developer: Charge by Time, Not Value', image: image1, description: 'Should freelancers charge based on time or value?', content: 'Full content of the article...', category: 'Freelance', date: '2024-11-26' },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(2);
  const [visibleComments, setVisibleComments] = useState([]);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  const currentArticles = paginate(allArticles, currentPage, articlesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(allArticles.length / articlesPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const totalComments = [
      "John Doe: This is an insightful article on React architecture. Thanks for sharing!",
      "Jane Smith: I found the freelance section really helpful. Great tips!",
      "Alice Johnson: Amazing explanation on React components!",
      "Bob Brown: The tips on time management are priceless.",
      "Mary Davis: Thanks for the detailed guide on freelance rates.",
      "Chris Lee: Your article was eye-opening. Definitely sharing this!",
      "David Wilson: Very practical tips for React developers!",
      "Sarah White: This helped me understand better ways to charge clients.",
      "Paul Green: Excellent resource, keep up the great work!",
    ];

    setVisibleComments(totalComments.slice(0, 3));

    const interval = setInterval(() => {
      setCurrentCommentIndex(prevIndex => (prevIndex + 3) % totalComments.length);
    }, 5000);  

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const totalComments = [
      "John Doe: This is an insightful article on React architecture. Thanks for sharing!",
      "Jane Smith: I found the freelance section really helpful. Great tips!",
      "Alice Johnson: Amazing explanation on React components!",
      "Bob Brown: The tips on time management are priceless.",
      "Mary Davis: Thanks for the detailed guide on freelance rates.",
      "Chris Lee: Your article was eye-opening. Definitely sharing this!",
      "David Wilson: Very practical tips for React developers!",
      "Sarah White: This helped me understand better ways to charge clients.",
      "Paul Green: Excellent resource, keep up the great work!",
    ];

    const commentsToDisplay = totalComments.slice(currentCommentIndex, currentCommentIndex + 3);
    
    if (commentsToDisplay.length < 3) {
      setVisibleComments(totalComments.slice(0, 3));
    } else {
      setVisibleComments(commentsToDisplay);
    }
  }, [currentCommentIndex]);

  return (
    <div className="blog">
      <div className="blog-container">
        <Sidebar />

        <div className="blog-content">
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(allArticles.length / articlesPerPage)}
            >
              Next
            </button>
          </div>

          <div className="articles-list">
            {currentArticles.map((article) => (
              <div className="article-card" key={article.id}>
                <img src={article.image} alt={article.title} className="article-image" />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p><strong>Category:</strong> {article.category}</p>
                <p><small>{article.date}</small></p>
                <Link to={`/article/${article.id}`} className="read-more">
                  Read More
                </Link>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(allArticles.length / articlesPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <motion.div className="comments-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.5 }}>
        <h3>Comments</h3>
        {visibleComments.map((comment, index) => (
          <motion.div className="comment"
            key={comment}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}>
            <strong>{comment.split(":")[0]}:</strong> {comment.split(":")[1]}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;

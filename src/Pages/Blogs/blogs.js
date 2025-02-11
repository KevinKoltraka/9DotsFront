import React from "react";
import './blog.css';
import blog from "./example.jpg"
const Blog = () => {
  const blogs = [
    {
      title: "How to Start Your Own Business",
      description: "Learn the step-by-step process of building a successful business from scratch.",
      image: blog,
      author: "John Doe",
      date: "January 25, 2025",
      link: "#"
    },
    {
      title: "Top 10 Marketing Strategies in 2025",
      description: "Discover the most effective marketing strategies to grow your brand.",
      image: blog,
      author: "Jane Smith",
      date: "January 20, 2025",
      link: "#"
    },
    {
      title: "The Future of Technology",
      description: "A deep dive into upcoming tech trends and how they will shape the world.",
      image: blog,
      author: "Tech Guru",
      date: "January 15, 2025",
      link: "#"
    },
  ];

  return (
    <section className="blog-sector">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <p className="section-description">Stay updated with the latest trends and insights.</p>

        <div className="blog-cards">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <div className="blog-meta">
                  <span className="blog-author">By {blog.author}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <a href={blog.link} className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        <li><Link to="/category/react">React</Link></li>
        <li><Link to="/category/freelance">Freelance</Link></li>
        <li><Link to="/category/javascript">JavaScript</Link></li>
        <li><Link to="/category/webdev">Web Development</Link></li>
      </ul>
      <h3>Recent Posts</h3>
      <ul>
        <li><Link to="/article/1">Feature-Based React Architecture</Link></li>
        <li><Link to="/article/2">React and FormData</Link></li>
        <li><Link to="/article/3">Freelance Developer Tips</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

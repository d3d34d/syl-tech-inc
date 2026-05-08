import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="post-not-found">
        <h1>Post not found</h1>
        <Link to="/blog" className="back-link">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="post-page">
      <motion.div 
        className="post-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="post-hero-image" style={{ backgroundImage: `url(${post.image})` }}>
          <div className="post-hero-overlay" />
        </div>
        
        <div className="post-header-content">
          <Link to="/blog" className="post-breadcrumb">← Blog</Link>
          <motion.span 
            className="post-category"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {post.category}
          </motion.span>
          <motion.h1 
            className="post-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {post.title}
          </motion.h1>
          <motion.div 
            className="post-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="post-date">{post.date}</span>
            <span className="post-read-time">6 min read</span>
          </motion.div>
        </div>
      </motion.div>

      <div className="post-container">
        <div className="post-author-card">
          <div className="author-info">
            <h4>{post.author.name}</h4>
            <p className="author-role">{post.author.role}</p>
            <p className="author-bio">{post.author.bio}</p>
          </div>
        </div>

        <motion.div 
          className="post-body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.citations && (
          <div className="post-citations">
            <h3>Citations & Research</h3>
            <ul>
              {post.citations.map((cite, i) => (
                <li key={i}>{cite}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="post-footer">

          <div className="share-section">
            <h4>Share this article</h4>
            <div className="share-buttons">
              <button className="share-btn">Twitter</button>
              <button className="share-btn">LinkedIn</button>
            </div>
          </div>
          
          <div className="next-prev-nav">
            <Link to="/blog" className="back-to-all">All Articles</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

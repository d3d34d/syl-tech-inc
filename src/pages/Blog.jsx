import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="blog-container">
        {blogPosts.map((post) => (
          <article key={post.id} className={`blog-post ${post.featured ? 'featured' : ''}`}>
            <div className="post-info">
              <span className="post-category">{post.category}</span>
              <h2 className="post-title">
                <Link to={`/blog/${post.id}`} className="post-title-link">
                  {post.title}
                </Link>
              </h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-footer-meta">
                <time className="post-date">{post.date}</time>
                <Link to={`/blog/${post.id}`} className="read-more">Read Full Article →</Link>
              </div>
            </div>
            <Link to={`/blog/${post.id}`} className="post-image-link">
              <div className="post-image dithered">
                <img src={post.image} alt={post.title} />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <Link
        key={post.id}
        to={`/post/${post.id}`}
        style={{
          display: 'block',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          backgroundColor: '#ffffff',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
          textDecoration: 'none',
          color: 'inherit',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f0f4f8';
          e.currentTarget.style.transform = 'translateY(-0.25rem)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }}
      >
        <h2>{post.title}</h2>
        <p>{post.content.split('\n')[0]}</p>
      </Link>
    ))}
  </div>
);

export default BlogList;

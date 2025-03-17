import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));
  const backButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    marginBottom: '20px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };
const containerStyle = {
    position: 'relative',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#2980b9';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#3498db';
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div style={containerStyle}>
      <title>{post.title} - AWS Blog</title>
       <button
        onClick={() => navigate(-1)}
        style={backButtonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        &larr; Back to Blog List
      </button>
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        By {post.author} on {post.date}
      </p>
      <div className="prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;

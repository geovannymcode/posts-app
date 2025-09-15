// src/components/PostCard.js
import React from 'react';

// 🎯 Componente que recibe un post y lo muestra
const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      {/* Encabezado con ID y usuario */}
      <div className="post-header">
        <span className="post-id">#{post.id}</span>
        <span className="post-user">Usuario {post.userId}</span>
      </div>

      {/* Título del post */}
      <h3 className="post-title">{post.title}</h3>

      {/* Cuerpo del post */}
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default PostCard;
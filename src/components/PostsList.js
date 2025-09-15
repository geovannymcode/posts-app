import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { getAllPosts } from '../services/postService';

const PostsList = () => {
  // 🎯 Estados para manejar diferentes situaciones
  const [posts, setPosts] = useState([]);           // Array de posts
  const [loading, setLoading] = useState(true);     // ¿Está cargando?
  const [error, setError] = useState(null);         // ¿Hay algún error?

  // 🔥 useEffect - Se ejecuta cuando el componente se monta
  useEffect(() => {
    // Función para obtener los posts
    const fetchPosts = async () => {
      try {
        setLoading(true);           // Empezamos a cargar
        setError(null);             // Limpiamos errores previos

        // Llamamos a nuestra API
        const postsData = await getAllPosts();

        // Guardamos los posts en el estado
        setPosts(postsData);

      } catch (err) {
        // Si hay error, lo guardamos
        setError('Error al cargar los posts. Inténtalo de nuevo.');
        console.error('Error:', err);

      } finally {
        // Siempre quitamos el loading
        setLoading(false);
      }
    };

    // Ejecutamos la función
    fetchPosts();

    // [] = solo se ejecuta una vez al montar el componente
  }, []);

  // 🎯 Función para recargar los posts
  const handleRefresh = () => {
    setLoading(true);
    setError(null);

    getAllPosts()
      .then(postsData => setPosts(postsData))
      .catch(err => setError('Error al recargar los posts'))
      .finally(() => setLoading(false));
  };

  // 🎨 Si está cargando, mostramos un spinner
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando posts...</p>
      </div>
    );
  }

  // 🎨 Si hay error, mostramos mensaje de error
  if (error) {
    return (
      <div className="error-container">
        <h3>¡Oops! Algo salió mal</h3>
        <p>{error}</p>
        <button onClick={handleRefresh} className="retry-button">
          Intentar de nuevo
        </button>
      </div>
    );
  }

  // 🎨 Si todo está bien, mostramos los posts
  return (
    <div className="posts-container">
      {/* Header con información */}
      <div className="posts-header">
        <h2>📝 Posts del Blog</h2>
        <p>Total de posts: {posts.length}</p>
        <button onClick={handleRefresh} className="refresh-button">
          🔄 Actualizar
        </button>
      </div>

      {/* Grid con todos los posts */}
      <div className="posts-grid">
        {posts.map(post => (
          <PostCard 
            key={post.id}    // Key único para cada elemento
            post={post}      // Pasamos el post como prop
          />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
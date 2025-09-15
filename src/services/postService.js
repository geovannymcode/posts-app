const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllPosts = async () => {
  try {
    // Hacemos la petición HTTP
    const response = await fetch(`${API_BASE_URL}/posts`);

    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Convertimos la respuesta a JSON
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
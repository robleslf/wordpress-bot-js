const axios = require('axios'); // Importa la biblioteca axios

// URL de la API de WordPress y ruta del endpoint para crear un nuevo post
const apiUrl = 'http://localhost/wordpress/wp-json/wp/v2/posts';

// Token JWT que obtuviste previamente
const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3dvcmRwcmVzcyIsImlhdCI6MTY5MzY0NzEwMCwibmJmIjoxNjkzNjQ3MTAwLCJleHAiOjE2OTQyNTE5MDAsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.Cd_UyKyEf8HfBPQlDa69J_m_oZbzP2FAbr4OcPhK2fM'; // Aquí debes poner el token JWT que obtuviste previamente

// Datos del nuevo post que deseas crear, y establece "publish" como el estado
const newPostData = {
  title: 'Título del nuevo Post',
  content: 'Contenido del nuevo post',
  status: 'publish', // Establece el estado como "publish" para que se publique directamente
};

// Configuración de la solicitud POST
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtToken}`, // Agrega el token JWT al encabezado de autorización
  },
};

// Realiza la solicitud POST para crear el nuevo post
axios.post(apiUrl, newPostData, config)
  .then(response => {
    console.log('Nuevo post creado con éxito y publicado:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error al crear el nuevo post:');
    console.error(error);
  });

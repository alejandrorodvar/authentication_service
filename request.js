const axios = require('axios');

const requestData = {
    username: 'testuser',
    password: 'testuserpassword',
  };
  
  axios.post('http://localhost:3000/getData', requestData)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error.response ? error.response.data : error.message);
    });
This microservice uses Node.js, Express, and MongoDB. For requesting data, axios was used, although alternatives could work. 
The microservice handles user registration authentication, by parsing through a database provided by my partner and searching for existing users. If the user exists, the program will reflect this, and if the user does not exist or some other error is encountered, the program will respond accordingly. 

1) Requesting Data
  a. If using axios, npm install axios
  b. Set up the code block for axis, making sure to include a POST request to '/getData'
  c. Example call:

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
   
2) Receiving Data
  a. If using axios, npm install axios
  b. Make a GET request (using axios) to the endpoint
  c. Make sure to handle response data so it goes to desired place. 


3) UML Sequence Diagram

   'app/other microservice'                'server.js'                  'mongodb'
                 HTTP Request------------->           Request------------>
                 HTTP Response<------------           Response<----------

import axios from 'axios';
// this is a user login api in react native

const Axios = axios.create({
  baseURL: 'https://akshay-flopkart.herokuapp.com/',
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2ZDA1MjZlZjdjNjAwMTUxYTRmZDIiLCJlbWFpbCI6InByYXZlc2hrdW1hckBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjU1MTAwMTYyLCJleHAiOjE2NTc2OTIxNjJ9.2X6jG-OWKlpHnwByggZbzze5_u5f7-JlyZ9B8hPybCo',
  },
});

export default Axios;

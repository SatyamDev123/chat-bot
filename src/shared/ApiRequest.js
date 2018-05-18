import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.personalityforge.com/api/chat/'
});

export default instance;
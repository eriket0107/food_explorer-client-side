import axios, { Axios } from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})
// ('http://localhost:3333');

// 'https://food-explorer-api-eriket.onrender.com'

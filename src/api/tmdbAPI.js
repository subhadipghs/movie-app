import axios from 'axios'

const tmdbAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e8d55cf51a3ce12948a9c9005f40bfec',
  },
})

export default tmdbAPI

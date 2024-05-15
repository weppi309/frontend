import axios from 'axios'

export let endpoints = {
    'khachsans': '/khachsans/',
    'tinhs': '/tinhs/'
}
export default axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})
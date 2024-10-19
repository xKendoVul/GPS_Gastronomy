import axios from 'axios';

export const getFood = () => {
    return axios.get('http://localhost:8000/gps/food/')
}
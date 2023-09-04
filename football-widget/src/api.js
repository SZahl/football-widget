import axios from "axios";

export const fetchData = () => {
    return axios.get('https://frontend-tech-test-ashy.vercel.app/api/match');
}
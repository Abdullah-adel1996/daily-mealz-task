import axios from 'axios';

const baseUrl = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json';

export const loadGames = () => {
    return axios.get(baseUrl);
}
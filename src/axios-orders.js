import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-fe0aa-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;
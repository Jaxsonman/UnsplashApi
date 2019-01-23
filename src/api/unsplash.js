import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5d59014be9becad324404df2f26fd031cfd47879b3b0a3458f30d5a97e3f6cfc'
    }
})
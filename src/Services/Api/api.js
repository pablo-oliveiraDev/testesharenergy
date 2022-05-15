import axios from 'axios';


const api =axios.create({
    baseURL:"http://localhost:5080"
});
// const api =axios.create({
//     baseURL:"https://api.spaceflightnewsapi.net/v3/articles"
// });

export default api





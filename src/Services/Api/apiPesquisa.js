import axios from 'axios';
//https://api.spaceflightnewsapi.net/v3/articles?title_contains=TEXTO
    //api pesquisa exigida pelo teste
const apiPesquisa =axios.create({
    baseURL:"https://api.spaceflightnewsapi.net/v3/articles?title_contains="
});

export default apiPesquisa
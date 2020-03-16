import axios from 'axios'

axios.defaults.baseURL = 'https://newsapi.org/v2/';
const APIKEY = '05c9d8e844694234a7a56578e7c7011c'

export async function getTopArticlesRequest() {
    return await axios.get(`/top-headlines?apiKey=${APIKEY}&country=us`)
        .then(res => res.data)
}

export async function getArticlesByCategoryRequest(query) {
    return await axios.get(`/everything?apiKey=${APIKEY}&q=${query}`)
        .then(res => res.data)
}
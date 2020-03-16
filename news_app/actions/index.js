import { GET_TOP_ARTICLES, GET_ARTICLES_BY_CATEGORY, CHANGE_CATEGORY } from "../utils/ActionConstants";


export const getTopArticles = () => ({
    type: GET_TOP_ARTICLES
})

export const getArticlesByCategory = (category) => ({
    type: GET_ARTICLES_BY_CATEGORY,
    value: category
})

export const changeCategory = (category) => ({
    type: CHANGE_CATEGORY,
    value: category
})

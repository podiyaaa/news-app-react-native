import {
    FETCHING_TOP_ARTICLES, GOT_TOP_ARTICLES,
    FETCHING_ARTICLES_BY_CATEGORY, GOT_ARTICLES_BY_CATEGORY,
    FETCHING_ARTICLES_BY_CATEGORY_ERROR,
    FETCHING_TOP_ARTICLES_ERROR,
    CHANGE_CATEGORY,
    CHANGED_CATEGORY
} from "../utils/ActionConstants"

const initialState = {
    topArticles: [],
    isTopArticlesLoading: false,
    topArticlesLoadingError: false,
    topArticlesErrorMessage: null,
    filterArticles: [],
    isFilterArticlesLoading: false,
    filterArticlesLoadingError: false,
    filterArticlesErrorMessage: null,
    selectedCategory: 'Bitcoin',
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case FETCHING_TOP_ARTICLES:
            return {
                ...state,
                isTopArticlesLoading: true,
            }
        case GOT_TOP_ARTICLES:
            return {
                ...state,
                isTopArticlesLoading: false,
                topArticles: action.value.status === 'ok' ? action.value.articles : [],
                topArticlesLoadingError: action.value.status === 'error',
                topArticlesErrorMessage: action.value.status === 'error' ? action.value.message : null,
            }
        case FETCHING_TOP_ARTICLES_ERROR:
            return {
                ...state,
                isTopArticlesLoading: false,
                topArticles: [],
                topArticlesLoadingError: true,
                topArticlesErrorMessage: action.value,
            }
        case FETCHING_ARTICLES_BY_CATEGORY:
            return {
                ...state,
                isFilterArticlesLoading: true
            }
        case GOT_ARTICLES_BY_CATEGORY:
            return {
                ...state,
                isFilterArticlesLoading: false,
                filterArticles: action.value.status === 'ok' ? action.value.articles : [],
                filterArticlesLoadingError: action.value.status === 'error',
                filterArticlesErrorMessage: action.value.status === 'error' ? action.value.message : null,
            }
        case FETCHING_ARTICLES_BY_CATEGORY_ERROR:
            return {
                ...state,
                isFilterArticlesLoading: false,
                filterArticles: [],
                filterArticlesLoadingError: true,
                filterArticlesErrorMessage: action.value,
            }
        case CHANGED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.value
            }
        default:
            return state
    }
}
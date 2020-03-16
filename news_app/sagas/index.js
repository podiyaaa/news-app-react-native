import { takeEvery, put, call } from 'redux-saga/effects';
import {
    GET_TOP_ARTICLES, FETCHING_TOP_ARTICLES, GOT_TOP_ARTICLES,
    FETCHING_TOP_ARTICLES_ERROR, FETCHING_ARTICLES_BY_CATEGORY,
    GOT_ARTICLES_BY_CATEGORY, FETCHING_ARTICLES_BY_CATEGORY_ERROR,
    GET_ARTICLES_BY_CATEGORY, CHANGED_CATEGORY, CHANGE_CATEGORY
} from '../utils/ActionConstants';
import { getTopArticlesRequest, getArticlesByCategoryRequest } from '../apis';

function* getTopArticlesSaga() {
    yield put({ type: FETCHING_TOP_ARTICLES })
    try {
        const data = yield call(getTopArticlesRequest)
        yield put({ type: GOT_TOP_ARTICLES, value: data })
    } catch (e) {
        console.log('getTopArticlesSaga', e)
        yield put({ type: FETCHING_TOP_ARTICLES_ERROR, value: 'Error getting top articles' })
    }
}

function* getArticlesByCategorySaga(action) {
    yield put({ type: FETCHING_ARTICLES_BY_CATEGORY })
    try {
        const data = yield call(getArticlesByCategoryRequest, action.value)
        yield put({ type: GOT_ARTICLES_BY_CATEGORY, value: data })
    } catch (e) {
        console.log('getArticlesByCategorySaga', e)
        yield put({ type: FETCHING_ARTICLES_BY_CATEGORY_ERROR, value: 'Error getting articles by category' })
    }
}

function* changeCategory(action) {
    yield put({ type: CHANGED_CATEGORY, value: action.value })
    yield put({ type: GET_ARTICLES_BY_CATEGORY, value: action.value })
}

export function* rootSaga() {
    yield takeEvery(GET_TOP_ARTICLES, getTopArticlesSaga)
    yield takeEvery(GET_ARTICLES_BY_CATEGORY, getArticlesByCategorySaga)
    yield takeEvery(CHANGE_CATEGORY, changeCategory)
}
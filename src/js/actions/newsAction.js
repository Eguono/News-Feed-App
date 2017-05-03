import Dispatcher from '../dispatcher';
import newsApi from '../api/newsApi';

export const getSource = (category) => {
    newsApi.getSources(category, (data) => {
        Dispatcher.dispatch({
            type: 'GET_SOURCES',
            data
        })
    })
}

export const getArticle = (source, sortBy) => {
    newsApi.getSources(source, sortBy, (data) => {
        Dispatcher.dispatch({
            type: 'GET_ARTICLE',
            data
        })
    })
}
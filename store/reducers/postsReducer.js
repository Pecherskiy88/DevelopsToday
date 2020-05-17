import { combineReducers } from 'redux';
import { actionTypes } from '../types';

const {
    GET_POSTS_INIT,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    GET_CURRENT_POST_INIT,
    GET_CURRENT_POST_SUCCESS,
    GET_CURRENT_POST_FAILURE,
    CREATE_POST_INIT,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    SET_FIELD_VALUE,
    CLEAR_STORE,
} = actionTypes;

const initialPostsState = {
    data: [],
    loading: false,
    loaded: false,
    error: false,
    errorData: {},
};

const postsReducer = (state = initialPostsState, { type, payload }) => {
    switch (type) {
        case GET_POSTS_INIT:
            return { ...state, loading: true, loaded: false, error: false, errorData: {} };
        case GET_POSTS_SUCCESS: {
            const { data } = payload;
            return { ...state, data, loading: false, loaded: true, error: false, errorData: {} };
        }
        case GET_POSTS_FAILURE:
            return { ...state, loading: false, loaded: false, error: true, errorData: payload };
        case CLEAR_STORE:
            return { ...state, ...initialPostsState };
        default:
            return state;
    }
};

const initialCurrentPostState = {
    post: {
        title: '',
        body: '',
        id: null,
    },
    loading: false,
    loaded: false,
    error: false,
    errorData: {},
};

const currentPostReducer = (state = initialCurrentPostState, { type, payload }) => {
    switch (type) {
        case GET_CURRENT_POST_INIT:
            return { ...state, loading: true, loaded: false, error: false, errorData: {} };
        case GET_CURRENT_POST_SUCCESS: {
            const { data } = payload;
            return { ...state, post: data, loading: false, loaded: true, error: false, errorData: {} };
        }
        case GET_CURRENT_POST_FAILURE:
            return { ...state, loading: false, loaded: false, error: true, errorData: payload };
        case CLEAR_STORE:
            return { ...state, ...initialCurrentPostState };
        default:
            return state;
    }
};

const initialCreatePostState = {
    title: '',
    body: '',
    sending: false,
    sent: false,
    error: false,
    errorData: {},
};

const createPostReducer = (state = initialCreatePostState, { type, payload }) => {
    switch (type) {
        case CREATE_POST_INIT:
            return { ...state, sending: true, sent: false, error: false, errorData: {} };
        case CREATE_POST_SUCCESS:
            return { ...state, sending: false, sent: true, error: false, errorData: {} };
        case CREATE_POST_FAILURE:
            return { ...state, sending: false, sent: false, error: true, errorData: payload };
        case SET_FIELD_VALUE: {
            const { name, value } = payload;
            return { ...state, [name]: value, sending: false, sent: false, error: false, errorData: {} };
        }
        case CLEAR_STORE:
            return { ...state, ...initialCreatePostState };
        default:
            return state;
    }
};

export default combineReducers({
    postsListData: postsReducer,
    currentPost: currentPostReducer,
    createPost: createPostReducer,
});

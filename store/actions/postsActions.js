import { getPostsApi, getCurrentPostApi, createPostApi } from '../api';
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

export const getPosts = (params) => (dispatch) => {
    dispatch({
        type: GET_POSTS_INIT,
    });
    getPostsApi(params)
        .then((response) => {
            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: { ...response },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_POSTS_FAILURE,
                payload: { ...error },
            });
        });
};

export const getCurrentPost = (id) => (dispatch) => {
    dispatch({
        type: GET_CURRENT_POST_INIT,
    });
    getCurrentPostApi(id)
        .then((response) => {
            dispatch({
                type: GET_CURRENT_POST_SUCCESS,
                payload: { ...response },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_CURRENT_POST_FAILURE,
                payload: { ...error },
            });
        });
};

export const sendPost = (data) => (dispatch) => {
    dispatch({
        type: CREATE_POST_INIT,
    });
    createPostApi(data)
        .then(() => {
            dispatch({
                type: CREATE_POST_SUCCESS,
            });
        })
        .catch((error) => {
            dispatch({
                type: CREATE_POST_FAILURE,
                payload: { ...error },
            });
        });
};

export const setFieldValue = (name, value) => ({
    type: SET_FIELD_VALUE,
    payload: { name, value },
});

export const clearStore = () => ({
    type: CLEAR_STORE,
});

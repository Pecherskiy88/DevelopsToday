import { actionTypes } from '../types';

const { INCREMENT, DECREMENT } = actionTypes;

export const incrementAction = (value) => ({
    type: INCREMENT,
    payload: value,
});

export const decrementAction = (value) => ({
    type: DECREMENT,
    payload: value,
});

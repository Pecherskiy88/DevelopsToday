import { actionTypes } from '../types';

const { INCREMENT, DECREMENT } = actionTypes;

const initialState = 0;

const counterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INCREMENT:
            return state + payload;
        case DECREMENT:
            return state - payload;
        default:
            return state;
    }
};

export default counterReducer;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { incrementAction, decrementAction } from '../store/actions/counterActions';

const IndexPage = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter);
    return (
        <>
            <Button onClick={() => dispatch(incrementAction(5))}>PLUS</Button>
            <Button primary onClick={() => dispatch(decrementAction(5))}>
                MINUS
            </Button>
            <Text>{counterValue}</Text>
        </>
    );
};

export default IndexPage;

const Button = styled.button`
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
    cursor: pointer;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Text = styled.text`
    color: 'black';
`;

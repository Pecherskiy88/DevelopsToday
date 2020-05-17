import React from 'react';
import styled from 'styled-components';

const Header = () => (
    <StyleHeader>
        <StyleBlock>
            <StyleTitle>Develops Blog</StyleTitle>
            <StyleText>Real stories & opinions about running an independent membership business.</StyleText>
        </StyleBlock>
    </StyleHeader>
);

export default Header;

const StyleHeader = styled.header`
    background-color: #000;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyleBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyleTitle = styled.h1`
    color: rgba(255, 255, 255, 0.8);
    text-decoration: underline;
    font-size: 44px;
    font-weight: 500;
    letter-spacing: 6px;
    margin: 0;
`;

const StyleText = styled.p`
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    letter-spacing: 6px;
    padding: 0 16px;
    text-align: center;
`;

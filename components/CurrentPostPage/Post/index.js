import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Post = (props) => {
    const { title, body } = props.post;
    return (
        <StyleDiv>
            <StyleTitle>{title}</StyleTitle>
            <StyleText>{body}</StyleText>
        </StyleDiv>
    );
};

Post.defaultProps = {
    post: {
        title: '',
        body: '',
        id: Date.now(),
    },
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Post;

const StyleDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 36px 0;
    text-align: center;
`;

const StyleTitle = styled.h3`
    font-size: 26px;
    font-weight: 400;
    text-decoration: underline;
    text-transform: uppercase;
`;

const StyleText = styled.p`
    color: #728a94;
    font-weight: 400;
    font-size: 18px;
    text-align: start;
`;

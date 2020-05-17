import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../Common/Button';

const CreatePost = ({ titleValue, bodyValue, onChange, onClick }) => {
    return (
        <StyleDiv>
            <StyleInput placeholder="Title" name="title" value={titleValue} onChange={onChange} />
            <StyleArea placeholder="Type your story..." name="body" value={bodyValue} onChange={onChange} />
            <Button primary onClick={onClick}>
                Upload
            </Button>
        </StyleDiv>
    );
};

CreatePost.propTypes = {
    titleValue: PropTypes.string,
    bodyValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CreatePost;

const StyleDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 36px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const StyleInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 20px;
`;

const StyleArea = styled.textarea`
    width: 100%;
    min-height: 200px;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 16px;
    margin-top: 30px;
`;

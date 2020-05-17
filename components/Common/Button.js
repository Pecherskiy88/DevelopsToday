import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = (props) => {
    return <StyleButton {...props}>{props.children}</StyleButton>;
};

Button.defaultProps = {
    children: 'BUTTON',
};

Button.propTypes = {
    primary: PropTypes.bool,
    children: PropTypes.any,
};

export default Button;

const StyleButton = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? 'black' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'black')};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 1px solid;
    border-color: #000;
    border-radius: 40px;
    cursor: pointer;
    :hover {
        box-shadow: 0px 25px 33px -25px rgba(0, 0, 0, 0.75);
    }
`;

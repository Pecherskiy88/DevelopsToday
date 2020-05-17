import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styled from 'styled-components';

const PostsList = ({ postsArray }) => {
    const renderItems =
        postsArray.length > 0
            ? postsArray.map((el) => (
                  <StyleItem key={el.id}>
                      <StyleTitle>{el.title}</StyleTitle>
                      <StyleText>{el.body}</StyleText>
                      <StyleLink>
                          <Link href={`/posts/${el.id}`}>
                              <a>{`Read more >>`}</a>
                          </Link>
                      </StyleLink>
                  </StyleItem>
              ))
            : [];

    return <StyleList>{renderItems}</StyleList>;
};

PostsList.defaultProps = {
    postsArray: [
        {
            title: '',
            body: '',
            id: Date.now(),
        },
    ],
};

PostsList.propTypes = {
    postsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostsList;

const StyleList = styled.ul`
    width: 80%;
    margin: 0 auto;
    list-style: none;
    padding: 36px 0;
`;

const StyleItem = styled.li`
    margin: 1rem, 0;
    border-top: 1px solid #728a94;
`;

const StyleTitle = styled.h3`
    font-size: 20px;
    font-weight: 400;
`;

const StyleText = styled.p`
    color: #728a94;
    font-weight: 400;
    font-size: 14px;
`;

const StyleLink = styled.button`
    border: none;
    background-color: transparent;
    color: #000;
    font-size: 16px;
    margin-left: 70%;
`;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';

import { getPosts, clearStore } from '../store/actions/postsActions';
import { postListDataSelector, createPostSelector } from '../store/selectors';

import Header from '../components/Common/Header';
import Button from '../components/Common/Button';
import PostsList from '../components/MainPage/PostsList';

const IndexPage = () => {
    const dispatch = useDispatch();
    const postListData = useSelector((state) => postListDataSelector(state));
    const createPostData = useSelector((state) => createPostSelector(state));
    const { sent } = createPostData;

    useEffect(() => {
        dispatch(getPosts());
        return () => dispatch(clearStore());
    }, [sent]);

    const { data } = postListData;

    // Сортируем, новые посты в начале списка
    const sortedData =
        data.length > 0
            ? data.sort((a, b) => {
                  if (a.id > b.id) {
                      return -1;
                  }
              })
            : data;

    return (
        <>
            <Header />
            <StyleDiv>
                <Button primary>
                    <Link href="/posts/new">
                        <a>Write post</a>
                    </Link>
                </Button>
            </StyleDiv>

            <PostsList postsArray={sortedData} />
        </>
    );
};

export default IndexPage;

const StyleDiv = styled.div`
    text-align: end;
`;

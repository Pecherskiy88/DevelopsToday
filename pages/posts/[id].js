import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentPost, clearStore } from '../../store/actions/postsActions';
import { currentPostDataSelector } from '../../store/selectors';

import Header from '../../components/Common/Header';
import Button from '../../components/Common/Button';
import Post from '../../components/CurrentPostPage/Post';

const CurrentPost = () => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch();
    const currentPost = useSelector((state) => currentPostDataSelector(state));

    useEffect(() => {
        dispatch(getCurrentPost(id));
        return () => clearStore();
    }, []);

    const { post } = currentPost;

    return (
        <>
            <Header />
            <Button>
                <Link href="/">
                    <a>BACK</a>
                </Link>
            </Button>
            <Post post={post} />
        </>
    );
};

export default CurrentPost;

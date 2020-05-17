import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { setFieldValue, sendPost, clearStore } from '../../store/actions/postsActions';
import { createPostSelector } from '../../store/selectors';

import Header from '../../components/Common/Header';
import Button from '../../components/Common/Button';
import CreatePost from '../../components/CreatePostPage/CreatePost';

const NewPost = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const postData = useSelector((state) => createPostSelector(state));
    const { title, body, sent } = postData;

    useEffect(() => {
        if (sent) {
            router.push('/');
        }
        return () => dispatch(clearStore());
    }, [sent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFieldValue(name, value));
    };

    const onSubmit = () => {
        const minTitleSymbols = 2;
        const minBodySymbols = 5;

        if (title.length >= minTitleSymbols && body.length >= minBodySymbols) {
            dispatch(sendPost({ title, body }));
        } else {
            window.alert(`
            Min symbols for Title: ${minTitleSymbols} and your Story: ${minBodySymbols}`);
        }
    };

    return (
        <>
            <Header />
            <Button>
                <Link href="/">
                    <a>BACK</a>
                </Link>
            </Button>
            <CreatePost onChange={handleChange} onClick={onSubmit} titleValue={title} bodyValue={body} />
        </>
    );
};

export default NewPost;

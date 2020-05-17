import axios from 'axios';

export const URL = 'https://simple-blog-api.crew.red/posts';

export const getPostsApi = (requestParams) => {
    // Для случаев когда requestParams может быть много(sort, search, page etc.) URL для примера.
    const defaultProps = {
        url: URL,
    };

    const params = { ...defaultProps, ...requestParams };

    return axios.get(params.url);
};

export const getCurrentPostApi = (id) => axios.get(`${URL}/${id}`);
export const createPostApi = (data) => axios.post(URL, data);

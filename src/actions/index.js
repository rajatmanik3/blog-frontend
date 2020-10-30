import config from '../config';
import axios from 'axios';

export function getBlogs() {
    return(dispatch) => {
        return axios.post(`${config.baseUrl}` + '/api/blog/list', {
            limit: 10
          })
          .then((res) => {
            dispatch(insertBlogs(res.data.data));
          })
    }
}

/* Action to insert blogs */
export function insertBlogs(blogs) {
    return{
        type: 'INSERT_BLOGS',
        blogs: blogs
    }
}
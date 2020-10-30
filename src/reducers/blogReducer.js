/* blogReducer will act as a reducer for the blogStore */

const initState = {
    blogs: []
}

const blogReducer = (state = initState, action) => {
    if(action.type === 'INSERT_BLOGS') {
        return{
            ...state,
            blogs: action.blogs
        }
    } else {
        return{
            ...state
        }
    }
}

export default blogReducer;
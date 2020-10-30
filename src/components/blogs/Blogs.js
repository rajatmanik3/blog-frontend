import { React, Component } from 'react';
import config from '../../config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { insertBlogs as insert } from '../../actions/index'

class Blogs extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        }
    }

    truncate(str) {
        return str.length > 100 ? str.substring(0, 100) + "..." : str;
    }

    dateFormat(date) {
        date = new Date(date);
        const month = date.getMonth();
        const day = date.getDate();
        const monthString = month >= 10 ? month : `0${month}`;
        const dayString = day >= 10 ? day : `0${day}`;
        return `${date.getFullYear()}-${monthString}-${dayString}`;
    }

    componentDidMount() {
        axios.post(`${config.baseUrl}` + '/api/blog/list', {
            limit: 10
          })
          .then((res) => {
              this.setState({ blogs: res.data.data});
              this.props.insertBlogs(res.data.data)
          }, (error) => {
                toast.error(error.response.data.message)
          });
    }

    render() {
        const { blogs } = this.state;
        const blogList = blogs.length ? (
            blogs.map((blog, index) => {
                return (
                    <div className="post card d-flex" key={index + 1}>
                        <img src={config.baseUrl + blog.imageUrl} alt={blog.title} />
                        <div className="card-content">
                            <Link to={'/blog/' + blog._id}>
                                <span className="card-title">{blog.title}</span>
                            </Link>
                            <p>{this.truncate(blog.description)}</p>
                            <p>
                                <img className="clock-img" src={process.env.PUBLIC_URL + '/images/clock.png'} alt='Clock' /> <span>{this.dateFormat(blog.createdAt)}</span>
                            </p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No blogs yet!</div>
            )

        return (
            <div className="container">
                <h4 className="center">Blogs</h4>
                { blogList }
                <ToastContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        insertBlogs: (blogs) => {
            dispatch(insert(blogs))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
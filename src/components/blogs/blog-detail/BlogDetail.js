import { React, Component } from 'react';
import { connect } from 'react-redux';
import config from '../../../config';

class BlogDetail extends Component {

    render() {
        const blog = this.props.blog ? (
            <div className="post mt-25">
                <img className="detail-img" src={config.baseUrl + this.props.blog.imageUrl} alt={this.props.blog.title} />
                <h4 div className="center">{this.props.blog.title}</h4>
                <p>{this.props.blog.description}</p>
            </div>
        ) : (
            <div className="center">Loading ...</div>
        )
        return (
            <div className="container">
                { blog }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let _id = ownProps.match.params.blogId
    return {
        blog: state.blogs.find(blog => blog._id === _id)
    }
}

export default connect(mapStateToProps)(BlogDetail);
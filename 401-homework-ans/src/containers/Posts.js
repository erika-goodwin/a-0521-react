import React from 'react'
import {connect} from 'react-redux'

import { selectPostsByUserOne } from '../redux/posts.selector'

let count = 0

const Posts = ({ postsArr }) => {

    console.log(`Posts render: ${++count}`)

    return(
        <div>
            <h3>Posts</h3>
            <ul>
                {
                    postsArr.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({ 
    // postsArr: state.postsObj.posts 
    //  count and POST are rerender
    // postsArr: state.postsObj.posts.filter(post => post.author === 'user-1')
    // Only count is rerender / not render the post
    postsArr: selectPostsByUserOne(state)
})

export default connect(mapStateToProps)(Posts)
import { createSelector } from 'reselect'

const selectAllPosts = state => state.postsObj

export const selectPostsByUserOne = createSelector(
    [selectAllPosts],
    (postsObj) => postsObj.posts.filter(post => post.author === 'user-1')
)

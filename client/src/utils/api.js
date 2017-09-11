import firebase from './fire'
import uuidv4 from 'uuid/v4'

const categoriesRef = firebase.database().ref('categories')
const postsRef = firebase.database().ref('posts')
const commentsRef = firebase.database().ref('comments')
const postRef = (postId) => firebase.database().ref(`posts/${postId}`)
const commentRef = (commentId) => firebase.database().ref(`comments/${commentId}`)

export const fetchCategories = () =>
  categoriesRef.once('value')
    .then(snapshot => snapshot.val())

export const fetchPosts = () =>
  postsRef.once('value')
    .then(snapshot => {
      const posts = snapshot.val()
      return Object.keys(posts).map(post => posts[post])
    })

export const fetchPost = (postId) =>
  postRef(postId).once('value')
    .then(snapshot => snapshot.val())

export const fetchComments = (postId) =>
  commentsRef.once('value')
    .then(snapshot => {
      const comments = snapshot.val()
      const commentsArray = Object.keys(comments).map(comment => comments[comment])
      return commentsArray.filter(ca => ca.parentId === postId)
    })

export const fetchComment = (commentId) =>
  commentRef(commentId).once('value')
    .then(snapshot => snapshot.val())

export const createPost = (post) => {
  const postDefaultValues = {
    id: uuidv4(),
    timestamp: Date.now(),
    voteScore: 0,
    deleted: false,
  }

  return (
    postRef(postDefaultValues.id)
      .set({
        ...post,
        ...postDefaultValues,
      })
      .then(() => fetchPost(postDefaultValues.id))
  )
}

export const createComment = (comment) => {
  const commentDefaultValues = {
    id: uuidv4(),
    voteScore: 0,
    timestamp: Date.now(),
    deleted: false,
    parentDeleted: false,
  }

  return (
    commentRef(commentDefaultValues.id)
      .set({
        ...comment,
        ...commentDefaultValues,
      })
      .then(() => fetchComment(commentDefaultValues.id))
  )
}

export const updateComment = (comment) =>
  commentRef(comment.id)
    .update({
      ...comment,
      timestamp: Date.now(),
    })
    .then(() => fetchComment(comment.id))


export const deleteComment = (commentId) =>
  commentRef(commentId)
    .update({
      deleted: true,
      timestamp: Date.now(),
    })
    .then(() => fetchComment(commentId))

export const updatePost = (post) =>
  postRef(post.id)
    .update({
      ...post,
      timestamp: Date.now(),
    })
    .then(() => fetchPost(post.id))

export const deletePost = (postId) =>
  postRef(postId)
    .update({
      deleted: true,
      timestamp: Date.now(),
    })
    .then(() => fetchPost(postId))


export const votePost = (postVote) => {
  const voteScore =
    postVote.option === "upVote"
      ? ++postVote.entity.voteScore
      : --postVote.entity.voteScore

  return (
    postRef(postVote.entity.id)
      .update({ voteScore })
      .then(() => fetchPost(postVote.entity.id))
    )
}

export const voteComment = (commentVote) => {
  const voteScore =
    commentVote.option === "upVote"
      ? ++commentVote.entity.voteScore
      : --commentVote.entity.voteScore

  return (
    commentRef(commentVote.entity.id)
      .update({ voteScore })
      .then(() => fetchComment(commentVote.entity.id))
    )
}

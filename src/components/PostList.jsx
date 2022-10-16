import React from 'react'
import LikePost from './LikePost'

let style = {
    marginTop: '50px',
    padding: '5px',
    width: '200px',
    border: '4px solid black'
}

const PostList = ({ posts, deletePost, getEditedPost }) => {

  return (
    <div>
        {
            posts.map(item => {
                return (
                <div style={style} key={item.id}>
                    <img src={item.imageUrl} alt="" width="200" height="200" />
                    <h2>{item.author}</h2>
                    <p>{item.body}</p>
                    <button onClick={() => deletePost(item.id)}>DELETE</button>
                    <button onClick={() => getEditedPost(item.id)}>EDIT</button>
                    <LikePost />
                </div>
                )
            })
        }
    </div>
  )
}

export default PostList
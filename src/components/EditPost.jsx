import React, { useState } from 'react';

const EditPost = ({ editedPost, saveChanges }) => {

  const [editedObj, setEditedObj] = useState(editedPost);


  function editImage(e) {
    setEditedObj({
      ...editedObj,
      imageUrl: e.target.value
    })
  }

  function editAuthor(e) {
    setEditedObj({
      ...editedObj,
      author: e.target.value
    })
  }

  function editBody(e) {
    setEditedObj({
      ...editedObj,
      body: e.target.value
    })
  }

  return (
    <div>
      <h2>Edit post component</h2>
      <input type="text" value={editedObj.imageUrl} onChange={editImage} />
      <br /><br />
      <input type="text" value={editedObj.author} onChange={editAuthor} />
      <br /><br />
      <input type="text" value={editedObj.body} onChange={editBody} />
      <br /><br />
      <button onClick={() => saveChanges(editedObj)}>SAVE</button>
    </div>
  )
}

export default EditPost
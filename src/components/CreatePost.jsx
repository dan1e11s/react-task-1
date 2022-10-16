import React, { useState } from 'react'

const CreatePost = ({ addPost }) => {

    const [imageUrl, setImageUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');

    function createPost() {
        if(!imageUrl || !author || !body) {
            alert('Some inputs are empty!');
            return;
        };

        let postObj = {
            id: Date.now(),
            imageUrl,
            author,
            body
        };

        addPost(postObj);

        setImageUrl('');
        setAuthor('');
        setBody('');
    }

  return (
    <div>
        <input type="text" placeholder="Enter url image" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
        <br /> <br />
        <input type="text" placeholder="Enter author name" onChange={(e) => setAuthor(e.target.value)} value={author} />
        <br /> <br />
        <input type="text" placeholder="Enter body" onChange={(e) => setBody(e.target.value)} value={body} />
        <br /> <br />
        <button onClick={createPost}>ADD</button>
    </div>
  )
}

export default CreatePost
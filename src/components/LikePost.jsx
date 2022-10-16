import React, { useState } from 'react';

const LikePost = () => {
  const [like, setLike] = useState(false)

  let style = {
    float: 'right'
  }

  return (
    <span style={style} onClick={() => setLike(!like)}>{like ? '❤️' : '🤍'}</span>
  )
}

export default LikePost
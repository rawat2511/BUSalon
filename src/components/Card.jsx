// userId, id, title, body

import React from 'react'

const Card = ({ userId, id,  title, body}) => {

    const style = {
        width: "500px",
        margin: "0 auto",
        textAlign: "left"
    }
  return (
    <div style={style}>
      <h3>{userId+"."+id+ " " + title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Card;

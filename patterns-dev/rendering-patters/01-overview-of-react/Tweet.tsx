import React from 'react'
import User from './User'

const formatDate = (date) => date.toString()

function Tweet(props) {
  return (
    <div className="Tweet">
      <User user={props.author} />
      <div className="Tweet-text">
        {props.text}
      </div>
      <img className="Tweet-image"
          src={props.image.imageUrl}
          alt={props.image.description}
        />
      <div className="Tweet-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

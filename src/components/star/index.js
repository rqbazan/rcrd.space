import React from 'react'

export default function Star({ style }) {
  return (
    <img
      className="emoji"
      draggable="false"
      alt="⭐️"
      src="https://twemoji.maxcdn.com/2/72x72/2b50.png"
      style={{
        height: '1em',
        width: '1em',
        verticalAlign: '-0.1em',
        ...style
      }}
    />
  )
}

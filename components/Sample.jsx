import React from 'react'

const Sample = ({text}) => {
  return (
    <div>
        <button style={{padding: "5px 7px", fontSize: "12px", margin: "5px", borderRadius: "5px", cursor: "pointer"}}>{text}</button>
      {/* {text} */}
    </div>
  )
}

export default Sample

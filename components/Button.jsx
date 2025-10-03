import React from 'react'

const Button = ({ label, greet }) => {
  return (
    <button class ='custom-button' onClick={greet}>{label}</button>
  )
}

export default Button

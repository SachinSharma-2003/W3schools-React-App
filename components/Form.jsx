import React from 'react'

const Form = ({ label, btn }) => {
      const handleClick = () => {
        alert('Form Submitted Successfully!')
    }
  return (
    <div class="form-container">
      <form action="">
        <label htmlFor="">Enter your name: </label>
        <input type="text"  placeholder='John Doe'/><br />
        <label htmlFor="">Enter your Email Id: </label>
        <input type="text"  placeholder='John@example.com'/><br />
        <label htmlFor="">Enter your Password: </label>
        <input type="password"  placeholder='********'/><br />
        <button onClick ={handleClick}>{label}</button>
      </form>
    </div>
  )
}

export default Form

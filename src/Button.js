import React from 'react'

const Button = (props) => {
  return (
<>
    <button className='btn1' {...props}>{props.title}</button>
</>
    )
}

export default Button
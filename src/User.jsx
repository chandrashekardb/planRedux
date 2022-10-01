import React from 'react'

const User = (props) => {
    let {name,age}=props.data
  return (
    <>
    <h1>User Component {name}, {age}</h1>
    </>
  )
}

export default User
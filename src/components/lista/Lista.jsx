import React from 'react'


const Lista = ({user}) => {

    console.log(user)
  return (
    <>

        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>


    </>
  )
}



export default Lista

import React, { useEffect, useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  
  const [username, setUsername] = useState('')

  useEffect(() =>{
    const data = props.userData;
    console.log('user data in hearder:', data );
    

  if(!data) {
    setUsername('Admin')
  } else {
    setUsername(data.firstname)
  }
}, [props.userData]);

const logOutUser = () => {
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  
}

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello {"\u2728"} <br /> <span className='text-3xl font-semibold'>{username}  </span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white font px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header;
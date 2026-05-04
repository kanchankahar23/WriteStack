import React from 'react'

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <div className='text-3xl text-white text-center'>App</div>
  )
}

export default App
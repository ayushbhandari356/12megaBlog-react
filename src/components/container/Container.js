import React from 'react'
// children is just a variable taking property values
function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4' >
      {children}
    </div>
  )
}

export default Container

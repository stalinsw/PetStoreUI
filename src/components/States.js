import React from 'react'

// const States = ({name, language}) => {
const States = ({states}) => {
  return (
    // <div className='bg-warning text-center'>
    //   <h1>{props.name}</h1>
    //   <h4>{props.language}</h4>
    // </div>

    <div>
    {states.map((state)=>(
        <div className='bg-warning text-center'>   
        <h1>{state.name}</h1>
        <h4>{state.language}</h4>
        </div>
    ))}
    </div>
    // <div className='bg-warning text-center'>   
    // <h1>{name}</h1>
    // <h4>{language}</h4>
    // </div>  //destructuring
  )
}

export default States
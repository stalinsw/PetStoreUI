import React from 'react'
import NotLoggedin from './NotLoggedin'
import Loggedin from './Loggedin'

const Main = ({isLoggedin}) => {
  return (
    <div>
        {isLoggedin ? <Loggedin/>:<NotLoggedin/>}</div>
  )
}
export default Main
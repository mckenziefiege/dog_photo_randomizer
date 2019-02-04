import React from 'react'
import icon from '../img/iconfinder_Dog_3775255.svg'

const Header = () => {
  return (
    <div>
      <div className="heading-div">
        <img className="icon-dog" src={icon}/>
      </div>
      <div>
        <h1 className="header-main">Dog photo randomizer</h1>
      </div>
    </div>
  )
}

export default Header

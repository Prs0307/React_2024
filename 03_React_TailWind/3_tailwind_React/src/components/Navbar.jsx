import React from 'react'

function navbar() {
  return (
    <div>
       <nav>
        <ul className="flex nav_list">
            <li className="flex-auto w-32 nav-item1">Home</li>
            <li className="flex-auto w-32 nav-item2">About</li>
            <li className="flex-auto w-32 nav-item3">Contact</li>
            <li className="flex-auto w-32 nav-item4">Price</li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar

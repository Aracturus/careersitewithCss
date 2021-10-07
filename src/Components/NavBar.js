import React from 'react'
import './navbar.css'
import { useEffect, useState } from 'react'

export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

    useEffect(() => {

    let changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

    return (
        <>

        
        
            <nav>
            {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
                <li className="items">Location</li>
                <li className="items">Teams</li>
                <li className="items">Resources</li>
                <li className="items">University</li>
                <li className="items">How We Hire</li>
            
            </ul>
      )}

      <button onClick={toggleNav} className="btn"><i className="fas fa-bars"></i></button>
      {/* <button className="search-btn">SEARCH JOBS</button> */}
      
        </nav>
        <div className="title" >
            <span>JOIN OUR TALENT NETWORK &gt;</span>
          
        </div>
            
        </>
    )
}

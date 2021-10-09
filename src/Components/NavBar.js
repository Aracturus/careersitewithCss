import React from 'react'
import './navbar.css'

export default function NavBar() {

    return (
        <>     

            <nav className="navbar navbar-end" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
              

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item">
                    Location
                  </a>

                  <a className="navbar-item">
                    Teams
                  </a>
                  <a className="navbar-item">
                    Resources
                  </a>
                  <a className="navbar-item">
                    University
                  </a>
                  <a className="navbar-item">
                    How We Hire
                  </a>
                  
                </div>

                
              </div>
            </nav>
            <div className="container-join">
              <h2>Join Our Talent Network &gt;</h2>
            </div>


            
        </>
    )
}

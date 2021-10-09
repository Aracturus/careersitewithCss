import React from 'react'
import './navbar.css'

export default function NavBar() {

  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

    return (
        <>     

            <nav className="navbar navbar-end" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
              

                <a role="button" onClick className="navbar-burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a  href="/" className="navbar-item">
                    Location
                  </a>

                  <a href="/"  className="navbar-item">
                    Teams
                  </a>
                  <a className="navbar-item">
                    Resources
                  </a>
                  <a  href="/" className="navbar-item">
                    University
                  </a>
                  <a  href="/" className="navbar-item">
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

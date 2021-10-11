import React from 'react'
import './navbar.css'
import navlogo from './navlogo.png'

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

  // mousehover
  

    return (
        <>     

  
              <nav className="navbar navbar-menu  is-black" id="nav-bar" role="navigation" aria-label="main navigation">
                <div className="container ">

                  <div className="navbar-brand navbar-start ">
                    <a href="/"className="navbar-item" href="/">
                      <img src={navlogo} width="180" height="40"/>
                    </a>

                    <a href="/"role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                  </div>

                  <div id="navbarBasicExample" className="navbar-menu is-hoverable" >
                    <div className="navbar-end has-text-danger-dark" >
                      <a href="/"className="navbar-item " >
                      Products
                      </a>

                      <a href="/"className="navbar-item ">
                      Digitalization
                      </a>

                      <div className="navbar-item has-dropdown is-hoverable" >
                        <a href="/"className="navbar-link is-arrowless ">
                        Engineering
                        </a>

                        <div className="navbar-dropdown  ">
                          <a href="/"className="navbar-item ">
                            Engineering Services
                          </a>
                          <a href="/"className="navbar-item">
                            Rotor Dynamics
                          </a>
                          <a href="/"className="navbar-item" >
                            Surge Dynamics
                          </a>
                          <a href="/"className="navbar-item">
                            Reverse Engineering
                          </a>
                          <a href="/"className="navbar-item">
                            Retrofit &amp; Upgrade
                          </a>
                        </div>
                      </div><div className="navbar-item has-dropdown is-hoverable">
                        <a href="/"className="navbar-link is-arrowless " >
                        Plant Services
                        </a>

                        <div className="navbar-dropdown ">
                          <a href="/"className="navbar-item">
                            Operation &amp; Maintanence
                          </a>
                          <a href="/"className="navbar-item">
                            Condition Monitoring
                          </a>
                          <a href="/"className="navbar-item">
                            Plant Turnaroung
                          </a>
                          <a href="/"className="navbar-item">
                            Field Performance Test
                          </a>
                          <a href="/"className="navbar-item">
                            Engineered Spare Parts
                          </a>
                        </div>
                      </div>
                      <a href="/"className="navbar-item ">
                      Perspectives
                      </a>
                      <div className="navbar-item has-dropdown is-hoverable">
                        <a href="/"className="navbar-link is-arrowless ">
                        Company
                        </a>

                        <div className="navbar-dropdown">
                          <a href="/"className="navbar-item">
                            About Us
                          </a>
                          <a href="/"className="navbar-item ">
                            Career
                          </a>
                          <a href="/"className="navbar-item">
                            Contact us
                          </a>
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </div>

            </nav>

            <div className="container-join">
              <h2>Join Our Talent Network &gt;</h2>
            </div>


            
        </>
    )
}

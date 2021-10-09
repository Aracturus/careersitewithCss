import React from 'react'
import './forms.css'
export default function Forms() {
    return (
        <>
   
            <div className="forms-container">

                                <h1 className="form-heading">Reach Us</h1>

                        <div class="columns">
                            <div class="column">
                                <span className="heading-paragraph">

                                <p>
                                    Fill up the form and our Team will get Back to you within 24 hours.
                                </p>
                                </span>

                                <ol>
                                <li>
                                    <span className="li-btn">

                                    <i className="fa fa-phone  reach-icon "></i>
                                    <span>+0123456078910 </span>
                                </span>


                                </li>
                                <li>
                                    <span className="li-btn">

                                    <i className="fa fa-envelope  reach-icon "></i>
                                    <span> hello@welcome.com</span>
                                </span>
                                </li>
                                <li> <span className="li-btn">

                                    <i className="fas fa-map-marker-alt  reach-icon">        
                                    </i>
                                    <span>17th B main Road ,Motihari ,Bihar</span>
                                </span>

                                </li>
                                </ol>
                                <div className="social-icon">
                                <span>
                                    <i className="fab fa-facebook social-icons  "></i>

                                </span>
                                <span>
                                    <i className="fab fa-twitter social-icons "></i>

                                </span>
                                <span>
                                    <i className="fab fa-instagram social-icons "></i>

                                </span>
                            </div>
                            </div>
                            <div class="column">
                            <div className="form-block column">
                                <form action="">
                                    <label htmlFor="name">Your Name</label><br/>
                                    <span className="input-container">
                                        <i className="fa fa-user icon-forms ">    </i>                                 
                                        <input type="text" id="name" name="name" /><br/>
                                    </span>

                                    <label htmlFor="email">Mail</label><br />
                                    <span className="input-container">
                                        <span className="fa fa-envelope icon-forms"></span>
                                        <input type="email" id="email" name="email" /><br/>
                                    </span>


                                    <label htmlFor="message">Message</label><br/>
                                    <textarea name="message" id="message" cols="32" rows="10"></textarea><br/>
                                    <input className="btn-sendmessage" type="submit" value="Send Message"/>
                                </form> 

                            </div>
                            </div>
                            
                        </div>
            </div>

                                
            
        </>
    )
}

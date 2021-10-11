import React from 'react'
import './forms.css'
// import form from './form.jpeg'

export default function Forms() {
    return (
        <>
   
            <div className="career-box">
            <div className="container">
            

            <div className="columns ">
                <div className="column  ">
                    <div className="formimage-container">
                        <div >
                            <img className="image-container1"src={'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt="" srcset="" />

                        </div> 
                        <div >
                        <img className="image-container2" src={'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt="" srcset="" />

                        </div>
                         <div >
                         <img className="image-container3" src={'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt="" srcset="" />

                        </div>
                    </div>
                
                </div>
                <div className="column form-container">
                    <h2 className="form-heading"><b>Contact Us</b></h2>
                    <p className="form-para">
                        One of our workspace experts will reach out to you based on your communication preferences.
                    </p>
                    <div className="radio-box">
                    <h3 className="radio-heading"><b>What option you're intrested in ?</b></h3>
                        <div className=" radio-container">
                            <label className=" ">
                                <input type="radio" className="" name="rsvp"/>Office space
                            </label>
                            <label className=" ">
                                <input type="radio" className="" name="rsvp"/>Membership
                            </label>
                            <label className=" " >
                                <input type="radio" className="" name="rsvp"  />Dedicated Desk
                            </label>
                            <label className="" >
                                <input type="radio" className="" name="rsvp"  />Other
                            </label>
                        </div>
                    </div>

                    <div  className="container">
                     
                         <h3 className="input-heading"><b>Your details</b></h3>
                         <form action="">
                             <span className='form-flex'>
                                 <input type="text" placeholder="First Name*" name="" id="" />
                                 <input type="text" placeholder="Last Name*" name="" id="" />
                             </span> <br />
                             <span className='form-flex'>
                                 <input type="email" placeholder="Email*" name="" id="" />
                                 <input type="number" placeholder="Phone Number" name="" id="" />
                             </span> <br />
                             <span className='form-flex'>
                                 <input type="text" placeholder="Company Name*" name="" id="" />
                                 <input type="number" placeholder="Company size" name="" id="" />
                             </span><br />
                             <span className='form-flex  '>
                                 <input type="text" placeholder="Additional info" name="" className="add-info" />
                                 
                             </span><br />
                             <p className='input-para'>
                                 By clicking the button below you agree to our Terms of Service and have read and understood our Privacy Policy.

                             </p>
                             <button className="form-btn">Get in touch</button>
                         </form>
                         
                     </div>
                    


                </div>
                </div>
                
            </div>
            </div>

                                
            
        </>
    )
}

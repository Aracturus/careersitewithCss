import React from 'react'
import './forms.css'
export default function Forms() {
    return (
        <>
        <div className="form-container">

            <form action="">
            <h1 >Fill the Forms</h1><br />


                <input className="input" type="text" name="" id="" placeholder="First Name"/><br/>
                <input className="input" type="text" name="" id="" placeholder="Last Name"/><br/>
                <input className="input" type="email" name="" id=""  placeholder="Email"/><br/>
                <input className="input" type="number" name="" id="" placeholder="Phone Number"/><br/>
                <input className="form-file" type="file" name="" id="" placeholder="Chose File"/><br/>
                <button className="btn-submit">Submit</button>
            </form>
        </div>
            
        </>
    )
}

import React from 'react'
import './career.css'

export default function Career() {
    return (
        <>
        <div className="container-career">
            <h1>Career</h1>
            <div className="left-container">
                <p className="leftcontainer-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis corrupti voluptatum, possimus neque ducimus, magni earum, nemo voluptatibus sint labore reprehenderit sit quasi molestias. Quidem facere praesentium asperiores maiores amet.
                </p>
                <table id="table-container">
                    <tr >
                        <th >Designation / Position</th>
                        <th >Qulification / Relegation</th>
                    </tr >
                    <tr id="tr-border">
                        <td>Front-End Developer</td>
                        <td>Graduated ,Skills such as HTML ,CSS, JavaScsript and ReactJs</td>
                    </tr>
                    <tr  className="tr-border">
                    <td>Front-End Developer</td>
                        <td>Graduated ,Skills such as HTML ,CSS, JavaScsript and ReactJs</td>
                    </tr>
                </table>
            
                

            </div>
            <div className="right-container">
                <img className="image-Container"src={'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt="" srcset="" />

            </div>
        </div>
            
        </>
    )
}
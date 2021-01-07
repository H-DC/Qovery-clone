import React, { useEffect } from 'react'
import './Footer.css'
import comp1 from '../../assets/comp1.png';
import comp2 from '../../assets/comp2.png';
import comp3 from '../../assets/comp3.png';
import comp4 from '../../assets/comp4.png';


function Footer() {

    useEffect(()=>{
        setInterval(()=>{
            let image = document.querySelectorAll('#imageBox img')[3]
            let imagebox = document.getElementById('imageBox')
            imagebox.prepend(image);
        },4000)
    },[])

    return (
        <div id="footerContainer">
                <h3>They use it</h3>
                <div id="carousel">
                        <div className='shaders'></div>
                        <div className='shaders'></div>

                        <div id='imageBox'>
                            <img src={comp1}/>
                            <img src={comp2}/>
                            <img src={comp3}/>
                            <img src={comp4}/>
                        </div>
                </div>
                
                <div id="footerBanner">
                    <p>For demonstration purposes only, not affiliated to any company, not for commercial purposes</p>
                </div>
        </div>
    )
}

export default Footer

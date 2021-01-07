import React, { useEffect,useRef } from 'react';
import './Section.css';

import Main from '../../assets/sectionMain.png'
import One from '../../assets/sectionOne.png'
import Two from '../../assets/sectionTwo.png'
import Three from '../../assets/sectionThree.png'
import Four from '../../assets/sectionFour.png'


function Section() {

    useEffect(()=>{
       const sectionImg = document.getElementById("mainImg");
       const images = document.querySelectorAll('.sectionAnim')

       const sectionObs = new IntersectionObserver((entries)=>{
            console.log(entries[0].intersectionRatio);
            images.forEach((img,i) => {
                (entries[0].intersectionRatio>0)&&(img.style.animation =`pop 1s ease ${i*250}ms`);
            });
       }, { threshold: 0.9} )
       sectionObs.observe(sectionImg);

    },[])

    return (
        <div id="sectionContainer">
            <h3>How does it work?</h3>
            <p>Qovery Engine is an open-source abstraction layer product that turns easy apps deployment on AWS, GCP, Azure and others Cloud providers. The Qovery Engine is coded in Rust and takes advantage of Terraform, Helm, Kubectl, Docker to manage resources.</p>
            <div className="sectionImgBox">
                <img src={Main} id="mainImg"/>
                <img src={One} className="sectionAnim"/>
                <img src={Two} className="sectionAnim"/>
                <img src={Three} className="sectionAnim"/>
                <img src={Four} className="sectionAnim"/>
            </div>
        </div>
    )
}

export default Section

import React, { useEffect, useState } from 'react';
import './Header.css';
import qoveryLogo from '../../assets/qovery-Logo.png'
import qovery from '../../assets/qoveryRightsection.png'
import kubernetes from '../../assets/kubernetesRightsection.png'
import cloud from '../../assets/cloudRightsection.png'
import dots from '../../assets/dotsRightsection.png'

import { RiDiscordFill,RiGithubFill } from "react-icons/ri";

function Header() {

   const [titleFade, setTitleFade] = useState({opacity:0,top:'1rem'});
   const [p1Fade, setP1Fade] = useState({opacity:0,top:'1rem'});
   const [p2Fade, setP2Fade] = useState({opacity:0,top:'1rem'});

    useEffect(()=>{


        setTitleFade({opacity:1, top:'0rem'})
        setTimeout(()=>{  setP1Fade( {opacity:1, top:'0rem'} )},100)
        setTimeout(()=>{  setP2Fade( {opacity:1, top:'0rem'} )},200)

    },[])

    return (
        <div id="headerContainer">
            <div className="leftSection">
                <div className="logoContainer">
                    <img src={qoveryLogo} alt="qovery"/>
                    <span>Clone</span>
                </div>
                <div style={titleFade}>
                    Clone Engine
                </div>
                <p style={p1Fade}>Abstraction layer to deploy microservices applications on any Cloud provider.</p>
                <p style={p2Fade}>Qovery Engine is an open-source abstraction layer product that turns easy apps deployment on AWS, GCP, Azure and others Cloud providers.</p>
                <div id="headerBtnContainer">
                    <button><RiGithubFill className="headerIcon"/>See on Github</button>
                    <button><RiDiscordFill className="headerIcon"/>Join us on Discord</button>
                </div>
            </div>
            <div className="rightSection">
                <img src={qovery}/>
                <img src={kubernetes}/>
                <img src={cloud}/>
                <img src={dots}/>
            </div>
        </div>
    )
}

export default Header

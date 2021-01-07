import React, { useEffect } from 'react'
import './Grid.css'
import grid1 from '../../assets/grid1.jpg'
import grid2 from '../../assets/grid2.jpg'
import grid3 from '../../assets/grid3.jpg'
import grid4 from '../../assets/sectionMain.png'


function Grid() {

    useEffect(()=>{
        const lineOne = document.querySelectorAll("#gridContainer > div:nth-child(1)");
        const cardsOne = lineOne[0].childNodes
 
        const lineOneObs = new IntersectionObserver((entries)=>{
             cardsOne.forEach((card,i) => {
                 (entries[0].intersectionRatio>0)&&(card.className = 'card');
             });
        },{threshold:0.25} )
        lineOneObs.observe(lineOne[0]);

        const lineTwo = document.querySelectorAll("#gridContainer > div:nth-child(2)");
        const cardsTwo = lineTwo[0].childNodes
 
        const lineTwoObs = new IntersectionObserver((entries)=>{
             cardsTwo.forEach((card,i) => {
                 (entries[0].intersectionRatio>0)&&(card.className = 'card');
             });
        },{threshold:0.25} )
        lineTwoObs.observe(lineTwo[0]);
    },[])

    return (
        <div id="gridContainer">
            <div>
                <div className="hidden">
                    <img src={grid1}/>
                    <h3>Deploy real world applications</h3>
                    <p>Qovery Engine empowers you to deploy complex applications, such as a backend, a frontend, and a database in a very simple way.
                        <br/><br/>Servers, networking, security, all is done by the Engine for you.</p>
                    <a>SEE MORE</a>
                </div>
                <div className="hidden">
                    <img src={grid2}/>
                    <h3>Resiliency is key</h3>
                    <p>Qovery Engine knows when something goes wrong on the deployment of your applications. Qovery Engine is built with resiliency in mind. 
                        <br/><br/>A transactional engine inspired by what is provided into ACID databases has been developed at the heart of the product to rollback on a consistent and working application version when something goes wrong.</p>
                    <a>SEE MORE</a>
                </div>
            </div>
            <div>
                <div className="hidden">
                    <img src={grid3}/>
                    <h3>On top of the best tools</h3>
                    <p>Qovery Engine does not reinvent the wheel. It takes advantage of the best tools in the Cloud industry, such as Kubernetes, Terraform, and Helm to manage the deployment of the infrastructure and your applications.
                        <br/><br/>Servers, networking, security, all is done by the Engine for you.</p>
                    <a>SEE MORE</a>
                </div>
                <div className="hidden">
                    <img src={grid4}/>
                    <h3>Extensible</h3>
                    <p>Qovery Engine is built to be highly extensible. Adding the support of a Cloud provider or a Continuous Integration platform is as simple as implementing a simple programmatic interface.</p>
                    <a>SEE MORE</a>
                </div>
            </div>
        </div>
    )
}

export default Grid

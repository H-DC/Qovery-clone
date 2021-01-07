import React from 'react';
import Prism from 'prismjs';
import { RiDiscordFill,RiGithubFill } from "react-icons/ri";
import './prism.css';
import './Usage.css';

function Usage() {
    return (
        <div id="usageContainer">
            <div id="usageBanner">
                <h3>Usage</h3>
                <p>Initialize EKS (AWS Kubernetes) and ECR (AWS container registry) on AWS</p>
            </div>
            <pre>
                <code className="language-javascript">
                {`
    let engine = Engine::new( 
        context, // parameters 
        local_docker, // initialize Docker as a Build Platform 
        ecr, // initialize Elastic Container Registry 
        aws, // initialize AWS account 
        cloudflare, // initialize Cloudflare as DNS Nameservers 
    );

    let session = match engine.session() { 
        Ok(session) => session, // get the session 
        Err(config_error) => panic!("configuration error {:?}", config_error), 
    };

    let mut tx = session.transaction();
    
    // create EKS (AWS managed Kubernetes cluster)
    tx.create_kubernetes(&eks);
    
    // create the infrastructure and wait for the result 
    match tx.commit() { 
        TransactionResult::Ok => println!("OK"), 
        TransactionResult::Rollback(commit_err) => println!("ERROR but rollback OK"), 
        TransactionResult::UnrecoverableError(commit_err, rollback_err) => println!("FATAL ERROR") 
    };
                `}
                </code>
            </pre>

            <div id="usageBtnContainer">
                    <button><RiGithubFill className="headerIcon"/>See more on Github</button>
                    <button><RiDiscordFill className="headerIcon"/>Join us on Discord</button>
            </div>
        </div>
    )
}

export default Usage

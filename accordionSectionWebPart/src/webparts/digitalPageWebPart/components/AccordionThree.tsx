import * as React from 'react';
// import img from '../assets/workstreams.jpg';
import '../components/AccordionComponent.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface IAccordionThree{
    image: string;
    title: string;
    colour: string;
}


function AccordionThreeComponent(props: IAccordionThree){

    return (
        <div className="col col-md-6 col-lg-3 box">
        <img className="img-fluid" src={props.image} alt=""/>
        <div className="accordion-box-3">
            <div className="workstreams-heading" style={{backgroundColor: props.colour}}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExample-3">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne-3">
                    <a className="buttons focus button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-3" aria-expanded="false" aria-controls="flush-collapseOne-3">
                        Modelling & Simulation
                    </a>
                    </h2>
                    <div id="flush-collapseOne-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingOne-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-3">
                    <a className="buttons focus button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-3" aria-expanded="false" aria-controls="flush-collapseTwo-3">
                        Data As The Asset
                    </a>
                    </h2>
                    <div id="flush-collapseTwo-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingTwo-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree-3">
                    <a className="buttons focus button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-3" aria-expanded="false" aria-controls="flush-collapseThree-3">
                        Digital & Data Fitness
                    </a>
                    </h2>
                    <div id="flush-collapseThree-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingThree-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour-3">
                        <a className="buttons focus button-3 last-button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-3" aria-expanded="false" aria-controls="flush-collapseFour-3">
                            Automate Work Processes
                        </a>
                    </h2>
                    <div className="accordion-collapse-3 collapse link-box" id="flush-collapseFour-3" aria-labelledby="flush-headingFour-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AccordionThreeComponent;
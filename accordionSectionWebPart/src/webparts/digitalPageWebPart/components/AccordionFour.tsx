import * as React from 'react';
import img from '../assets/people.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss'


function AccordionFourComponent(){

    return (
        <div className="col col-md-6 col-lg-3 box-4 p-1">
        <img className="img-fluid" src={img} alt=""/>
        <div className="accordion-box-4">
            <div className="people-heading headings">
                <h5>PEOPLE</h5>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExample-4">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne-4">
                    <a className="buttons focus button-4 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-4" aria-expanded="false" aria-controls="flush-collapseOne-4">
                        Meet the Digital Team
                    </a>
                    </h2>
                    <div id="flush-collapseOne-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingOne-4">
                        <div className="accordion-body">
                            <a href="#">Digital R&D Centre of Excellence CoE</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-4">
                    <a className="buttons focus button-4 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-4" aria-expanded="false" aria-controls="flush-collapseTwo-4">
                        Meet the Digital Network
                    </a>
                    </h2>
                    <div id="flush-collapseTwo-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingTwo-4">
                        <div className="accordion-body">
                            <a href="#">Digital Leads</a>
                        </div>
                    </div>
                    <div id="flush-collapseTwo-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingTwo-4">
                        <div className="accordion-body">
                            <a href="#">Digital Tech Centre Champions</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree-4">
                    <a className="buttons focus button-4 last-button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-4" aria-expanded="false" aria-controls="flush-collapseThree-4">
                        Category & Functional Key Contacts
                    </a>
                    </h2>
                    <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4">
                        <div className="accordion-body">
                            <a href="#">Category </a>
                        </div>
                    </div>
                    <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4">
                        <div className="accordion-body">
                            <a href="#">Function</a>
                        </div>
                    </div>
                    <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4">
                        <div className="accordion-body">
                            <a href="#">Sub Function</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}
export default AccordionFourComponent;
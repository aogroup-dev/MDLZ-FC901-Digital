import * as React from 'react';
import img from '../assets/career.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss'


function AccordionFooterTwoComponent(){

    return (
        <div className="col col-md-6 col-lg-3 box">
                    <img className="img-fluid" src={img} alt=""/>
                    <div className="accordion-box-6" id="accordionFlushExample-6">
                        <div className="career-heading">
                            <h5 className='headings text-uppercase'>CAREER</h5>
                        </div>
                        <div className="accordion accordion-flush">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne-6">
                                <a className="career-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-6" aria-expanded="false" aria-controls="flush-collapseOne-6">
                                    Digital R&D
                                </a>
                                </h2>
                                <div id="flush-collapseOne-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Learning Menu</a>
                                    </div>
                                </div>
                                <div id="flush-collapseOne-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Roadmap</a>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo-6">
                                <a className="career-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-6" aria-expanded="false" aria-controls="flush-collapseTwo-6">
                                    R&D Resources
                                </a>
                                </h2>
                                <div id="flush-collapseTwo-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                    <a href="#">R&D Academy</a>
                                    </div>
                                </div>                                
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree-6">
                                <a className="career-button buttons accordion-button collapsed button-last" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-6" aria-expanded="false" aria-controls="flush-collapseThree-6">
                                    Enterprise Resources
                                </a>
                                </h2>
                                <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Grow Everyday</a>
                                    </div>
                                </div>
                                <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Career Launchpad</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

    );
}

export default AccordionFooterTwoComponent;
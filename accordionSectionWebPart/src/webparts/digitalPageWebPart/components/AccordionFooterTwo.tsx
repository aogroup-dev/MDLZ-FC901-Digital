import * as React from 'react';
// import img from '../assets/career.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss'



interface IAccordionFooterTwo{
    image: string;
    title: string;
    colour: string;
    imagePosition: boolean;
    link1: string;
    linkHref1: string;
    link2: string;
    linkHref2: string;
    link3: string;
    linkHref3: string;
}

function AccordionFooterTwoComponent(props: IAccordionFooterTwo){

    return (
        <div className="col col-md-6 col-lg-3 box">
            {props.imagePosition ? (
                <div>
            {props.title !== "" && 
            <div>
                    <img className="img-fluid" src={props.image} alt=""/>
                    <div className="accordion-box-6" id="accordionFlushExample-6">
                        <div className="career-heading" style={{backgroundColor: props.colour}}>
                            <h5 className='headings text-uppercase'>{props.title}</h5>
                        </div>
                        <div className="accordion accordion-flush">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne-6">
                                <a className="career-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-6" aria-expanded="false" aria-controls="flush-collapseOne-6">
                                    Digital R&D
                                </a>
                                </h2>
                                {props.link1 ? props.link1.split("~").map((item, index) => {return (
                                <div id="flush-collapseOne-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null}
                                {/* <div id="flush-collapseOne-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Learning Menu</a>
                                    </div>
                                </div> */}
                                {/* <div id="flush-collapseOne-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Roadmap</a>
                                    </div>
                                </div> */}
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo-6">
                                <a className="career-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-6" aria-expanded="false" aria-controls="flush-collapseTwo-6">
                                    R&D Resources
                                </a>
                                </h2>
                                {props.link2 ? props.link2.split("~").map((item, index) => {return (
                                <div id="flush-collapseTwo-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref2.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null}
                                {/* <div id="flush-collapseTwo-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                    <a href="#">R&D Academy</a>
                                    </div>
                                </div>                                 */}
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree-6">
                                <a className="career-button buttons accordion-button collapsed button-last" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-6" aria-expanded="false" aria-controls="flush-collapseThree-6">
                                    Enterprise Resources
                                </a>
                                </h2>
                                {props.link3 ? props.link3.split("~").map((item, index) => {return (
                                <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null}
                                {/* <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Grow Everyday</a>
                                    </div>
                                </div>
                                <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Career Launchpad</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>}
                </div>
            ): <div>
            {props.title !== "" && 
            <div>
                    <div className="accordion-box-6" id="accordionFlushExample-6">
                        <div className="career-heading" style={{backgroundColor: props.colour}}>
                            <h5 className='headings text-uppercase'>{props.title}</h5>
                        </div>
                        <div className="accordion accordion-flush">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne-6">
                                <a className="career-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-6" aria-expanded="false" aria-controls="flush-collapseOne-6">
                                    Digital R&D
                                </a>
                                </h2>
                                {props.link1 ? props.link1.split("~").map((item, index) => {return (
                                <div id="flush-collapseOne-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null}
                                {/* <div id="flush-collapseOne-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Learning Menu</a>
                                    </div>
                                </div> */}
                                {/* <div id="flush-collapseOne-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Roadmap</a>
                                    </div>
                                </div> */}
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo-6">
                                <a className="career-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-6" aria-expanded="false" aria-controls="flush-collapseTwo-6">
                                    R&D Resources
                                </a>
                                </h2>
                                {props.link2 ? props.link2.split("~").map((item, index) => {return (
                                <div id="flush-collapseTwo-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref2.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null}
                                {/* <div id="flush-collapseTwo-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                    <a href="#">R&D Academy</a>
                                    </div>
                                </div>                                 */}
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree-6">
                                <a className="career-button buttons accordion-button collapsed button-last" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-6" aria-expanded="false" aria-controls="flush-collapseThree-6">
                                    Enterprise Resources
                                </a>
                                </h2>
                                {props.link3 ? props.link3.split("~").map((item, index) => {return (
                                <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null}
                                {/* <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Grow Everyday</a>
                                    </div>
                                </div>
                                <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                        <a href="#">Career Launchpad</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <img className="img-fluid" src={props.image} alt=""/>
                </div>}
            </div> }

            </div>

    );
}

export default AccordionFooterTwoComponent;
import * as React from 'react';
// import img from '../assets/success.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss'


interface IAccordionFooter{
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
    link4: string;
    linkHref4: string;
}

function AccordionFooterComponent(props: IAccordionFooter) {
    return (
        <div className="col col-md-6 col-lg-3 box">
            {props.imagePosition ? (
                <div>
            {props.title !== "" && 
            <div>
            <img src={props.image} alt="" className="img-fluid"/>
            <div className="accordion-box-5" id="accordionFlushExample-5">
                <div className="news-heading" style={{backgroundColor: props.colour}}>
                    <h5 className='headings text-uppercase'>{props.title}</h5>
                </div>
                <div className="accordion accordion-flush">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-5" aria-expanded="false" aria-controls="flush-collapseOne-5">
                            Events
                        </a>
                        </h2>
                        {props.link1 ? props.link1.split("~").map((item, index) => {return (
                        <div id="flush-collapseOne-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                        {/* <div id="flush-collapseOne-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Calendar</a>
                            </div>
                        </div> */}
                        {/* <div id="flush-collapseOne-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Learning Month</a>
                            </div>
                        </div>
                        <div id="flush-collapseOne-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Digital Showcases</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-5" aria-expanded="false" aria-controls="flush-collapseTwo-5">
                            Digital R&D
                        </a>
                        </h2>
                        {props.link2 ? props.link2.split("~").map((item, index) => {return (
                        <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref2.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                        {/* <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Articles</a>
                            </div>
                        </div> */}
                        {/* <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Success Tracker</a>
                            </div>
                        </div>
                        <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">V2030 Feedback</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-5" aria-expanded="false" aria-controls="flush-collapseThree-5">
                            Enterprise
                        </a>
                        </h2>
                        {props.link3 ? props.link3.split("~").map((item, index) => {return (
                        <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                        {/* <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                            <a href="#">News</a>
                            </div>
                        </div>  */}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-5" aria-expanded="false" aria-controls="flush-collapseFour-5">
                            External
                        </a>
                        </h2>
                        {props.link4 ? props.link4.split("~").map((item, index) => {return (
                        <div id="flush-collapseFour-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingFour-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref4.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                        {/* <div id="flush-collapseFour-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingFour-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Success</a>
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
            <div className="accordion-box-5" id="accordionFlushExample-5">
                <div className="news-heading" style={{backgroundColor: props.colour}}>
                    <h5 className='headings text-uppercase'>{props.title}</h5>
                </div>
                <div className="accordion accordion-flush">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-5" aria-expanded="false" aria-controls="flush-collapseOne-5">
                            Events
                        </a>
                        </h2>
                        {props.link1 ? props.link1.split("~").map((item, index) => {return (
                        <div id="flush-collapseOne-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                        {/* <div id="flush-collapseOne-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Calendar</a>
                            </div>
                        </div> */}
                        {/* <div id="flush-collapseOne-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Learning Month</a>
                            </div>
                        </div>
                        <div id="flush-collapseOne-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingOne-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Digital Showcases</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-5" aria-expanded="false" aria-controls="flush-collapseTwo-5">
                            Digital R&D
                        </a>
                        </h2>
                        {props.link2 ? props.link2.split("~").map((item, index) => {return (
                        <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref2.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                        {/* <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Articles</a>
                            </div>
                        </div> */}
                        {/* <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Success Tracker</a>
                            </div>
                        </div>
                        <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">V2030 Feedback</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-5" aria-expanded="false" aria-controls="flush-collapseThree-5">
                            Enterprise
                        </a>
                        </h2>
                        {props.link3 ? props.link3.split("~").map((item, index) => {return (
                        <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                        {/* <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                            <a href="#">News</a>
                            </div>
                        </div>  */}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-5" aria-expanded="false" aria-controls="flush-collapseFour-5">
                            External
                        </a>
                        </h2>
                        {props.link4 ? props.link4.split("~").map((item, index) => {return (
                        <div id="flush-collapseFour-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingFour-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref4.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                        {/* <div id="flush-collapseFour-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingFour-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Success</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <img src={props.image} alt="" className="img-fluid"/>
        </div>}
            </div>}
        </div>



    );
}
export default AccordionFooterComponent;
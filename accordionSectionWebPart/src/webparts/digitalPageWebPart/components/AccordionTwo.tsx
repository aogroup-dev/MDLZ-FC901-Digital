import * as React from 'react';
// import img from '../assets/capabilities.jpg';
import '../components/AccordionComponent.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface IAccordionTwo{
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


function AccordionTwoComponent(props: IAccordionTwo){

    function showSection(){
        const section = document.getElementById('toolbox');
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }

    return (
        <div className="col col-md-6 col-lg-3 box">
        {props.imagePosition ? (
        <div>
        {props.title !== "" && 
        <div>
        <img className="img-fluid" src={props.image} alt=""/>
        <div className="accordion-box-2">
            <div className="capabilities-heading" style={{backgroundColor: props.colour}}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExample-2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne-2">
                    <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-2" aria-expanded="true" aria-controls="flush-collapseOne-2">
                        Current Catalogue
                    </a>
                    </h2>

                    <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href="#toolbox" onClick={showSection}>R&D Digital Toolbox 
                            User Guide</a>    
                        </div>
                    </div>
                    {props.link1 ? props.link1.split("~").map((item, index) => {return (
                        <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                    {/* <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href="#">R&D Digital Toolbox</a>    
                        </div>
                    </div>
                    <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href="#">Video Library</a>    
                        </div>
                    </div>
                    <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href="#">Learning Menu</a>    
                        </div>
                    </div> */}
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-2">
                    <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-2" aria-expanded="false" aria-controls="flush-collapseTwo-2">
                        What Can You Do
                    </a>
                    </h2>
                    {props.link2 ? props.link2.split("~").map((item, index) => {return (
                        <div id="flush-collapseTwo-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingTwo-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href={props.linkHref2.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                    {/* <div id="flush-collapseTwo-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingTwo-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                            <a href="#">R&D Digital Playbook</a>
                        </div>
                    </div> */}
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-2" aria-expanded="false" aria-controls="flush-collapseThree-2">
                        Need Help
                    </a>
                    </h2>
                    {props.link3 ? props.link3.split("~").map((item, index) => {return (
                        <div id="flush-collapseThree-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingThree-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                    {/* <div id="flush-collapseThree-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingThree-2" data-bs-parent="#accordionFlushExample-2">
                    <div className="accordion-body">
                        <a href="#">R&D Digital Request Form</a>
                    </div>
                    </div> */}
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour-2">
                    <a className="buttons focus button-2 accordion-button collapsed no-plus" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-2" aria-expanded="false" aria-controls="flush-collapseFour-2">
                        Project Management & Tracking
                    </a>
                    </h2>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive-2">
                    <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive-2" aria-expanded="false" aria-controls="flush-collapseFive-2">
                        Digital & Data Disciplines
                    </a>
                    </h2>
                    {props.link4 ? props.link4.split("~").map((item, index) => {return (
                        <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href={props.linkHref4.split("~")[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                    {/* <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href="#">General</a>
                        </div>
                    </div> */}
                    {/* <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                            <a href="#">Statistics</a>
                        </div>
                    </div>
                    <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                            <a href="#">Data Science</a>
                        </div>
                    </div>
                    <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                            <a href="#">Computational Physics</a>
                        </div>
                    </div>
                    <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                            <a href="#">Chemical & Process Modelling</a>
                        </div>
                    </div>
                    <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                            <a href="#">Extended Reality & Metaverse</a>
                        </div>
                    </div> */}
                </div>
            </div>
            </div>
        </div>}
                </div>
            ) :         <div>
            {props.title !== "" && 
            <div>
            
            <div className="accordion-box-2">
                <div className="capabilities-heading" style={{backgroundColor: props.colour}}>
                    <h5 className='headings text-uppercase'>{props.title}</h5>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample-2">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne-2">
                        <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-2" aria-expanded="true" aria-controls="flush-collapseOne-2">
                            Current Catalogue
                        </a>
                        </h2>
    
                        <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                            <a href="#toolbox" onClick={showSection}>R&D Digital Toolbox 
                                User Guide</a>    
                            </div>
                        </div>
                        {props.link1 ? props.link1.split("~").map((item, index) => {return (
                            <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                            <a href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}) : null}
                        {/* <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                            <a href="#">R&D Digital Toolbox</a>    
                            </div>
                        </div>
                        <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                            <a href="#">Video Library</a>    
                            </div>
                        </div>
                        <div id="flush-collapseOne-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingOne-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                            <a href="#">Learning Menu</a>    
                            </div>
                        </div> */}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo-2">
                        <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-2" aria-expanded="false" aria-controls="flush-collapseTwo-2">
                            What Can You Do
                        </a>
                        </h2>
                        {props.link2 ? props.link2.split("~").map((item, index) => {return (
                            <div id="flush-collapseTwo-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingTwo-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                            <a href={props.linkHref2.split("~")[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}) : null}
                        {/* <div id="flush-collapseTwo-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingTwo-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                                <a href="#">R&D Digital Playbook</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-2" aria-expanded="false" aria-controls="flush-collapseThree-2">
                            Need Help
                        </a>
                        </h2>
                        {props.link3 ? props.link3.split("~").map((item, index) => {return (
                            <div id="flush-collapseThree-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingThree-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                            <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}) : null}
                        {/* <div id="flush-collapseThree-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingThree-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                            <a href="#">R&D Digital Request Form</a>
                        </div>
                        </div> */}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour-2">
                        <a className="buttons focus button-2 accordion-button collapsed no-plus" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-2" aria-expanded="false" aria-controls="flush-collapseFour-2">
                            Project Management & Tracking
                        </a>
                        </h2>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive-2">
                        <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive-2" aria-expanded="false" aria-controls="flush-collapseFive-2">
                            Digital & Data Disciplines
                        </a>
                        </h2>
                        {props.link4 ? props.link4.split("~").map((item, index) => {return (
                            <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                            <a href={props.linkHref4.split("~")[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}) : null}
                        {/* <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                            <a href="#">General</a>
                            </div>
                        </div> */}
                        {/* <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                                <a href="#">Statistics</a>
                            </div>
                        </div>
                        <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                                <a href="#">Data Science</a>
                            </div>
                        </div>
                        <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                                <a href="#">Computational Physics</a>
                            </div>
                        </div>
                        <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                                <a href="#">Chemical & Process Modelling</a>
                            </div>
                        </div>
                        <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                            <div className="accordion-body">
                                <a href="#">Extended Reality & Metaverse</a>
                            </div>
                        </div> */}
                    </div>
                </div>
                </div>
                <img className="img-fluid" src={props.image} alt=""/>
            </div>}
                    </div>}

    </div>

    );
}

export default AccordionTwoComponent;
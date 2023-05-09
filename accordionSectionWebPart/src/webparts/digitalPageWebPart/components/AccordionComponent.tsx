import * as React from 'react';
// import img from '../assets/purpose.jpg';
import '../components/AccordionComponent.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


interface IAccordionSection{
    image: string;
    title: string;
    colour: string;
    test: string
    link1: string;
    linkHref1: string;
    link2: string;
    linkHref2: string;
    link3: string;
    linkHref3: string;
    imagePosition: boolean;
}

function AccordionSection(props: IAccordionSection){

    // const jsonData = {
    //     data: [
    //         {
    //             title: "Digital R&D",
    //             items: [
    //                 {
    //                     title: "Documents",
    //                     link: "http:",
    //                 },
    //                 {
    //                     title: "Video",
    //                     link: "http:",
    //                 },
    //             ],
    //         },
    //         {
    //             title: "R&D Vision 2030",
    //             items: [
    //                 {
    //                     title: "Documents",
    //                     link: "http:",
    //                 },
    //                 {
    //                     title: "Video",
    //                     link: "http:",
    //                 },
    //             ],
    //         },
    //         {
    //             title: "Enterprise",
    //             items: [
    //                 {
    //                     title: "Documents",
    //                     link: "http:",
    //                 },
    //                 {
    //                     title: "Videos",
    //                     link: "http",
    //                 },
    //             ],
    //         },
    //     ],
    // }
    // {props.test ? props.test.split("~").map((item, index) => {return (

    //     <div id="flush-collapseOne-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingOne-1" data-bs-parent="#accordionFlushExample">
        
    //     <div className="accordion-body">
        
    //     <a href={props.testHref.split("~")[index] || "#"} key={item}>{item}</a>
        
    //     </div>
        
    //     </div>
        
    //     );}) : null}
return (
    
    <div className="col col-md-6 col-lg-3 box">

                    
        {props.imagePosition ? (
            <div>
                    {props.title !== "" && 
                    <div>
                    <img className="img-fluid" src={props.image} alt=""/>
                <div className="accordion-box" id="accordionFlushExample">
                    <div className="purpose-heading" style={{backgroundColor: props.colour}}>
                    
                        <h5 className='headings text-uppercase'>{props.title}</h5>
                    </div>
                    <div className="accordion accordion-flush">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne-1">
                            <a href="" className="buttons focus button-1  accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-1" aria-expanded="false" aria-controls="flush-collapseOne-1">
                                Digital R&D
                            </a>
                            </h2>
                        {props.link1 ? props.link1.split("~").map((item, index) => {return (
                        <div id="flush-collapseOne-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingOne-1" data-bs-parent="#accordionFlushExample">
                        
                        <div className="accordion-body">
                            <h1>{props.test}</h1>
                        
                        <a href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>
                        
                        </div>
                        
                        </div>
                        
                        );}) : null}
                            {/* <div id="flush-collapseOne-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingOne-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <a href={props.testHref.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                            </div> */}
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo-1">
                            <a className="buttons focus button-1 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-1" aria-expanded="false" aria-controls="flush-collapseTwo-1">
                                R&D Vision 2030
                            </a>
                            </h2>
                            {props.link2 ? props.link2.split("~").map((item, index) => {return (
                            <div id="flush-collapseTwo-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingTwo-1" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <a href={props.linkHref2.split("~")[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}): null}
{/* 
                            <div id="flush-collapseTwo-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingTwo-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                <a href="#">Videos</a>
                                </div>
                            </div> */}
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree-1">
                            <a className="buttons focus button-1 accordion-button collapsed last-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-1" aria-expanded="false" aria-controls="flush-collapseThree-1">
                                Enterprise
                            </a>
                            </h2>
                            {props.link3 ? props.link3.split("~").map((item, index) => {return (
                            <div id="flush-collapseThree-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingThree-1" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}): null}
                            {/* <div id="flush-collapseThree-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingThree-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                <a href="#">Videos</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                    </div>}
            </div>
                ):
            <div>
             {props.title !== "" && 
                    
                <div className="accordion-box" id="accordionFlushExample">
                    <div className="purpose-heading" style={{backgroundColor: props.colour}}>
                        <h5 className='headings text-uppercase'>{props.title}</h5>
                    </div>
                    <div className="accordion accordion-flush">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne-1">
                            <a href="" className="buttons focus button-1  accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-1" aria-expanded="false" aria-controls="flush-collapseOne-1">
                                Digital R&D
                            </a>
                            </h2>
                        {props.link1 ? props.link1.split("~").map((item, index) => {return (
                        <div id="flush-collapseOne-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingOne-1" data-bs-parent="#accordionFlushExample">
                        
                        <div className="accordion-body">
                        
                        <a href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>
                        
                        </div>
                        
                        </div>
                        
                        );}) : null}
                            {/* <div id="flush-collapseOne-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingOne-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <a href={props.testHref.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                            </div> */}
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo-1">
                            <a className="buttons focus button-1 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-1" aria-expanded="false" aria-controls="flush-collapseTwo-1">
                                R&D Vision 2030
                            </a>
                            </h2>
                            {props.link2 ? props.link2.split("~").map((item, index) => {return (
                            <div id="flush-collapseTwo-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingTwo-1" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <a href={props.linkHref2.split("~")[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}): null}
{/* 
                            <div id="flush-collapseTwo-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingTwo-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                <a href="#">Videos</a>
                                </div>
                            </div> */}
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree-1">
                            <a className="buttons focus button-1 accordion-button collapsed last-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-1" aria-expanded="false" aria-controls="flush-collapseThree-1">
                                Enterprise
                            </a>
                            </h2>
                            {props.link3 ? props.link3.split("~").map((item, index) => {return (
                            <div id="flush-collapseThree-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingThree-1" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}): null}
                            {/* <div id="flush-collapseThree-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingThree-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                <a href="#">Videos</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <img className="img-fluid" src={props.image} alt=""/>
                </div>}
            </div> }
    </div>

);
}
export default AccordionSection;



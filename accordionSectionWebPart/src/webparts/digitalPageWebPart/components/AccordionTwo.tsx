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
    subHeading: string;
    subHeadingLink: string;
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

    function colourChecker(colour: string) : string{
        if (colour === '#287819'){
            return 'buttonGreen';
        }else if (colour === '#2d6eaa'){
            return 'buttonBlue';
        }else if (colour === '#e6af23'){
            return 'buttonYellow';
        }else if (colour === '#a52323'){
            return 'buttonRed';
        }else if (colour === '#623e24'){
            return 'buttonBrown';
        }else if (colour === '#724d8d'){
            return 'buttonPurple';
        }else if (colour === '#666666'){
            return 'buttonGrey';
        }else if (colour === '#e18719'){
            return 'buttonOrange';
        }
    }

    function checkLinkHrefIndex(index: number): string{
        if (index == 0){
            return props.linkHref1;
        }else if (index == 1){
            return props.linkHref2;
        }else if (index == 2){
            return props.linkHref3;
        }else if (index == 3){
            return props.linkHref4;
        }

    }

    
    function checkLinkIndex(index: number): string {
        if (index == 0){
            return props.link1;
        }else if (index == 1){
            return props.link2;
        }else if (index == 2){
            return props.link3;
        }else if (index == 3){
            return props.link4;
        }
        }

    function showSection(){
        const section = document.getElementById('toolbox');
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }

    return (
        <div className="col-12 col-md-6 col-lg-3 box">
        {props.imagePosition ? (
        <div className={`h-100 bG-${colourChecker(props.colour)}-2`}>
        {props.title !== "" && 
        <div>
        <img className="img-fluid" src={props.image} alt=""/>
        <div className="accordion-box-2" id="accordionFlushExample-2">
            <div className="capabilities-heading" style={{backgroundColor: props.colour}}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="accordion accordion-flush">
                {props.subHeading ? props.subHeading.split(/\r\n|\r|\n/g).map((itemMain, indexMain) => {return (
        <div className="accordion-item" key={indexMain}>
        <h2 className="accordion-header" id={`flush-headingTwo-${indexMain}`}>
        <a className={`buttons focus ${colourChecker(props.colour)}-2 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseTwo-${indexMain}`} aria-expanded="true" aria-controls={`flush-collapseTwo-${indexMain}`}>
            {itemMain}
        </a>
        </h2>

        {/* <div id={`flush-collapseTwo-${indexMain}`} className="accordion-collapse-2 collapse link-box" aria-labelledby={`flush-headingTwo-${indexMain}`} data-bs-parent="#accordionFlushExample-2">
            <div className="accordion-body">
            <a href="#toolbox" onClick={showSection}>R&D Digital Toolbox 
                User Guide</a>    
            </div>
        </div> */}
        {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
            <div id={`flush-collapseTwo-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-1 collapse link-box`} aria-labelledby={`flush-headingTwo-${indexMain}`} data-bs-parent="#accordionFlushExample-2">
            <div className="accordion-body">
            <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "toolbox"} key={item} onClick={showSection}>{item}</a>
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
                )}): null}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-2">
                    <a href={props.subHeadingLink} className={`buttons focus ${colourChecker(props.colour)}-2 accordion-button collapsed no-plus`}>
                        Project Management & Tracking
                    </a>
                    </h2>
                </div>
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-2">
                    <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-2" aria-expanded="false" aria-controls="flush-collapseTwo-2">
                        What Can You Do
                    </a>
                    </h2>
                    {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseTwo-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingTwo-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href={props.linkHref2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseTwo-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingTwo-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                            <a href="#">R&D Digital Playbook</a>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-2" aria-expanded="false" aria-controls="flush-collapseThree-2">
                        Need Help
                    </a>
                    </h2>
                    {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseThree-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingThree-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href={props.linkHref3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseThree-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingThree-2" data-bs-parent="#accordionFlushExample-2">
                    <div className="accordion-body">
                        <a href="#">R&D Digital Request Form</a>
                    </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive-2">
                    <a className="buttons focus button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive-2" aria-expanded="false" aria-controls="flush-collapseFive-2">
                        Digital & Data Disciplines
                    </a>
                    </h2>
                    {props.link4 ? props.link4.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseFive-2" className="accordion-collapse-2 collapse link-box" aria-labelledby="flush-headingFive-2" data-bs-parent="#accordionFlushExample-2">
                        <div className="accordion-body">
                        <a href={props.linkHref4.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
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
                {/* </div> */}
            </div>
            </div>
        </div>}
                </div>
            ) :         <div>
            {props.title !== "" && 
            <div>
            
            <div className="accordion-box-2" id="accordionFlushExample-2">
                <div className="capabilities-heading" style={{backgroundColor: props.colour}}>
                    <h5 className='headings text-uppercase'>{props.title}</h5>
                </div>
                <div className="accordion accordion-flush">
                {props.subHeading ? props.subHeading.split(/\r\n|\r|\n/g).map((itemMain, indexMain) => {return (
        <div className="accordion-item" key={indexMain}>
        <h2 className="accordion-header" id={`flush-headingTwo-${indexMain}`}>
        <a className={`buttons focus ${colourChecker(props.colour)}-2 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseTwo-${indexMain}`} aria-expanded="true" aria-controls={`flush-collapseTwo-${indexMain}`}>
            {itemMain}
        </a>
        </h2>

        {/* <div id={`flush-collapseTwo-${indexMain}`} className="accordion-collapse-2 collapse link-box" aria-labelledby={`flush-headingTwo-${indexMain}`} data-bs-parent="#accordionFlushExample-2">
            <div className="accordion-body">
            <a href="#toolbox" onClick={showSection}>R&D Digital Toolbox 
                User Guide</a>    
            </div>
        </div> */}
        {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
            <div id={`flush-collapseTwo-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-2 collapse link-box`} aria-labelledby={`flush-headingTwo-${indexMain}`} data-bs-parent="#accordionFlushExample-2">
            <div className="accordion-body">
            <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "toolbox"} key={item} onClick={showSection}>{item}</a>
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
                )}): null}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour-2">
                    <a href="#" className={`buttons focus ${colourChecker(props.colour)}-2 accordion-button collapsed no-plus`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-2" aria-expanded="false" aria-controls="flush-collapseTwo-2">
                        Project Management & Tracking
                    </a>
                    </h2>
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
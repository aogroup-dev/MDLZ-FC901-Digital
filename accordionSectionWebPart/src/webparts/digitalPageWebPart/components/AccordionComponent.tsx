import * as React from 'react';
// import img from '../assets/purpose.jpg';
import '../components/AccordionComponent.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


interface IAccordionSection{
    image: string;
    title: string;
    colour: string;
    subHeading: string;
    subHeadingLinks: string;
    link1: string;
    linkHref1: string;
    link2: string;
    linkHref2: string;
    link3: string;
    linkHref3: string;
    link4: string;
    linkHref4: string;
    link5: string;
    linkHref5: string;
    imagePosition: boolean;
}

function AccordionSection(props: IAccordionSection){

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

    function checkLinkIndex(index: number): string{
        if (index == 0){
            return props.link1;
        }else if (index == 1){
            return props.link2;
        }else if (index == 2){
            return props.link3;
        }else if (index == 3){
            return props.link4;
        }
        else if (index == 4){
            return props.link5;
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
        else if (index == 4){
            return props.linkHref5
        }

    }

return (
    
    <div className="col-12 col-md-6 col-lg-3 box">

                    
        {props.imagePosition ? (
            <div className={`h-100 bG-${colourChecker(props.colour)}-1`} >
                    {props.title !== "" && 
                    <div>
                    <img className="img-fluid" src={props.image} alt=""/>
                <div className="accordion-box" id="accordionFlushExample">
                    <div className="purpose-heading" style={{backgroundColor: props.colour}}>
                    
                        <h5 className='headings text-uppercase'>{props.title}</h5>
                    </div>
                    <div className="accordion accordion-flush">
                        {props.subHeading ? props.subHeading.split(/\r\n|\r|\n/g).map((itemMain, indexMain, arr) => {return (
                        <div className="accordion-item" key={indexMain}>
                        <h2 className="accordion-header" id={`flush-heading-${indexMain}`}>
                        {indexMain === arr.length - 1 ? <a className={`buttons focus ${colourChecker(props.colour)}-1 accordion-button collapsed last-button`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapse-${indexMain}`}>{itemMain}</a> :
                            <a href="" className={`buttons focus ${colourChecker(props.colour)}-1 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapse-${indexMain}`}>
                                {itemMain}
                            </a>} 
                            </h2>
                            {/* split(/\r\n|\r|\n/g) */}
                            
                        {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((linkItem, linkIndex) => {return (
                        <div id={`flush-collapse-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-1 collapse link-box`} aria-labelledby={`flush-heading-${indexMain}`} data-bs-parent="#accordionFlushExample">
                        
                        <div className="accordion-body">
                        
                        <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex] || "#"} key={linkItem}>{linkItem}</a>
                        
                        </div>
                        
                        </div>
                        
                        );}) : null}
                            {/* <div id="flush-collapseOne-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingOne-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <a href={props.testHref.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                            </div> */}
                        </div>
                    )}): null}

                        {/* <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo-1">
                            <a className="buttons focus button-1 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-1" aria-expanded="false" aria-controls="flush-collapseTwo-1">
                                {props.subHeading2}
                            </a>
                            </h2>
                            {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                            <div id="flush-collapseTwo-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingTwo-1" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <a href={props.linkHref2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}): null} */}
{/* 
                            <div id="flush-collapseTwo-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingTwo-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                <a href="#">Videos</a>
                                </div>
                            </div> */}
                        {/* </div> */}
                        
                        {/* <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree-1">
                            <a className="buttons focus button-1 accordion-button collapsed last-button" type="button" style={{backgroundColor: props.colour}} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-1" aria-expanded="false" aria-controls="flush-collapseThree-1">
                                {props.subHeading3}
                            </a>
                            </h2>
                            {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                            <div id="flush-collapseThree-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingThree-1" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <a href={props.linkHref3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}): null} */}
                            {/* <div id="flush-collapseThree-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingThree-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                <a href="#">Videos</a>
                                </div>
                            </div> */}
                        {/* </div> */}
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
                    {props.subHeading ? props.subHeading.split(/\r\n|\r|\n/g).map((item, indexMain, arr) => {return (
                        <div className="accordion-item" key={indexMain}>
                        <h2 className="accordion-header" id={`flush-heading-${indexMain}`}>

                            {indexMain === arr.length - 1 ? <a className={`buttons focus ${colourChecker(props.colour)}-1 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapse-${indexMain}`}>{item}</a> :
                            <a href="" className={`buttons focus ${colourChecker(props.colour)}-1 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapse-${indexMain}`}>
                                {item}
                            </a>} 
                            
                            
                            </h2>
                            {/* split(/\r\n|\r|\n/g) */}
                        {checkLinkIndex(indexMain)? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((linkItem, linkIndex) => {return (
                        <div id={`flush-collapse-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-1 collapse link-box`} aria-labelledby={`flush-heading-${indexMain}`} data-bs-parent="#accordionFlushExample">
                        
                        <div className="accordion-body">
                        
                        <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex] || "#"} key={linkItem}>{linkItem}</a>
                        
                        </div>
                        
                        </div>
                        
                        );}) : null}
                            {/* <div id="flush-collapseOne-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingOne-1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <a href={props.testHref.split("~")[index] || "#"} key={item}>{item}</a>
                                </div>
                            </div> */}
                        </div>
                    )}): null}

                        {/* <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo-1">
                            <a className="buttons focus button-1 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-1" aria-expanded="false" aria-controls="flush-collapseTwo-1">
                            {props.subHeading}
                            </a>
                            </h2>
                            {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                            <div id="flush-collapseTwo-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingTwo-1" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <a href={props.linkHref2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}): null}
                        </div> */}
                        {/* <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree-1">
                            <a className="buttons focus button-1 accordion-button collapsed last-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-1" aria-expanded="false" aria-controls="flush-collapseThree-1">
                            {props.subHeading}
                            </a>
                            </h2>
                            {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                            <div id="flush-collapseThree-1" className="accordion-collapse-1 collapse link-box" aria-labelledby="flush-headingThree-1" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <a href={props.linkHref3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                            </div>
                            </div>
                            );}): null}
                        </div> */}
                    </div>
                    <img className="img-fluid" src={props.image} alt=""/>
                </div>}
            </div> }
    </div>

);
}
export default AccordionSection;



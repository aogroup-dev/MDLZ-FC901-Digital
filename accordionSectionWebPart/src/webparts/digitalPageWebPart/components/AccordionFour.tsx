import * as React from 'react';
// import img from '../assets/people.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss'

interface IAccordionFour{
    image: string;
    title: string;
    colour: string;
    imagePosition: boolean;
    subHeading1: string;
    subHeading2: string;
    subHeading3: string;
    link1: string;
    href1: string;
    link2: string;
    href2: string;
    link3: string;
    href3: string;
    link4: string;
    href4: string;
    link5: string;
    href5: string;
}


function AccordionFourComponent(props: IAccordionFour){

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
        else if (index == 4){
            return props.link5
        }
        }

        function checkLinkHrefIndex(index: number): string{
            if (index == 0){
                return props.href1;
            }else if (index == 1){
                return props.href2;
            }else if (index == 2){
                return props.href3;
            }else if (index == 3){
                return props.href4;
            }else if (index == 4){
                return props.href5;
            }
    
        }

    return (
        <div className="col-12 col-md-6 col-lg-3 box">
            {props.imagePosition ? (
                <div className={`h-100 bG-${colourChecker(props.colour)}-4`}>
        {props.title !== "" && 
        <div>
        <img className="img-fluid" src={props.image} alt=""/>
        <div className="accordion-box-4" id="accordionFlushExample-4">
            <div className="people-heading" style={{backgroundColor: props.colour}}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="accordion accordion-flush">
                {props.subHeading1 ? props.subHeading1.split(/\r\n|\r|\n/g).map((itemMain, indexMain, arr) => {return (
                <div className="accordion-item" key={indexMain}>
                <h2 className="accordion-header" id={`flush-headingFour-${indexMain}`}>
                {/* <a className="buttons focus button-4 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseFour-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseFour-${indexMain}`}>
                    {itemMain}
                </a> */}
                {indexMain === arr.length - 1 ? <a className={`buttons focus ${colourChecker(props.colour)}-4 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseFour-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseFour-${indexMain}`}>{itemMain}</a> :
                <a href="" className={`buttons focus ${colourChecker(props.colour)}-4 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseFour-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseFour-${indexMain}`}>
                    {itemMain}
                </a>}
                </h2>
                {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
                    <div id={`flush-collapseFour-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-4 collapse link-box`} aria-labelledby={`flush-headingFour-${indexMain}`} data-bs-parent="#accordionFlushExample-4">
                    <div className="accordion-body">
                    <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                    </div>
                    </div>
                    );}) : null}
                {/* <div id="flush-collapseOne-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingOne-4" data-bs-parent="#accordionFlushExample-4">
                    <div className="accordion-body">
                        <a href="#">Digital R&D Centre of Excellence &#40;CoE&#41;</a>
                    </div>
                </div> */}
            </div>
                )}): null}

                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-4">
                    <a className="buttons focus button-4 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-4" aria-expanded="false" aria-controls="flush-collapseTwo-4">
                    {props.subHeading2}
                    </a>
                    </h2>
                    {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseTwo-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingTwo-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                        <a href={props.href2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseTwo-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingTwo-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Digital Leads</a>
                        </div>
                    </div> */}
                    {/* <div id="flush-collapseTwo-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingTwo-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Digital Tech Centre Champions</a>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree-4">
                    <a className="buttons focus button-4 last-button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-4" aria-expanded="false" aria-controls="flush-collapseThree-4">
                    {props.subHeading3}
                    </a>
                    </h2>
                    {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                        <a href={props.href3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Category </a>
                        </div>
                    </div>
                    <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Function</a>
                        </div>
                    </div>
                    <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Sub Function</a>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
        </div>}
                </div>
            ) : <div>
                        {props.title !== "" && 
        <div>
        <div className="accordion-box-4" id="accordionFlushExample-4">
            <div className="people-heading" style={{backgroundColor: props.colour}}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="accordion accordion-flush" >
            {props.subHeading1 ? props.subHeading1.split(/\r\n|\r|\n/g).map((itemMain, indexMain, arr) => {return (
                <div className="accordion-item" key={indexMain}>
                <h2 className="accordion-header" id={`flush-headingFour-${indexMain}`}>
                {/* <a className="buttons focus button-4 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseFour-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseFour-${indexMain}`}>
                    {itemMain}
                </a> */}
                {indexMain === arr.length - 1 ? <a className={`buttons focus ${colourChecker(props.colour)}-4 accordion-button collapsed last-button-3`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseFour-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseFour-${indexMain}`}>{itemMain}</a> :
                <a href="" className={`buttons focus ${colourChecker(props.colour)}-4 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseFour-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseFour-${indexMain}`}>
                    {itemMain}
                </a>}
                </h2>
                {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
                    <div id={`flush-collapseFour-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-4 collapse link-box`} aria-labelledby={`flush-headingFour-${indexMain}`} data-bs-parent="#accordionFlushExample-4">
                    <div className="accordion-body">
                    <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                    </div>
                    </div>
                    );}) : null}
                {/* <div id="flush-collapseOne-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingOne-4" data-bs-parent="#accordionFlushExample-4">
                    <div className="accordion-body">
                        <a href="#">Digital R&D Centre of Excellence &#40;CoE&#41;</a>
                    </div>
                </div> */}
            </div>
                )}): null}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-4">
                    <a className="buttons focus button-4 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-4" aria-expanded="false" aria-controls="flush-collapseTwo-4">
                    {props.subHeading2}
                    </a>
                    </h2>
                    {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseTwo-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingTwo-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                        <a href={props.href2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseTwo-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingTwo-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Digital Leads</a>
                        </div>
                    </div> */}
                    {/* <div id="flush-collapseTwo-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingTwo-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Digital Tech Centre Champions</a>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree-4">
                    <a className="buttons focus button-4 last-button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-4" aria-expanded="false" aria-controls="flush-collapseThree-4">
                    {props.subHeading3}
                    </a>
                    </h2>
                    {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                        <a href={props.href3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Category </a>
                        </div>
                    </div>
                    <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Function</a>
                        </div>
                    </div>
                    <div id="flush-collapseThree-4" className="accordion-collapse-4 collapse link-box" aria-labelledby="flush-headingThree-4" data-bs-parent="#accordionFlushExample-4">
                        <div className="accordion-body">
                            <a href="#">Sub Function</a>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
        <img className="img-fluid" src={props.image} alt=""/>
        </div>}
                </div>}
    </div>
    );

}
export default AccordionFourComponent;
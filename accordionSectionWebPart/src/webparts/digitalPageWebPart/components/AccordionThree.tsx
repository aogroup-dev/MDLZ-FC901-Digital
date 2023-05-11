import * as React from 'react';
// import img from '../assets/workstreams.jpg';
import '../components/AccordionComponent.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface IAccordionThree{
    image: string;
    title: string;
    colour: string;
    imagePosition: boolean;
    subHeading1: string;
    subHeading2: string;
    subHeading3: string;
    subHeading4: string;
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


function AccordionThreeComponent(props: IAccordionThree){

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
            return props.link5;
        }
        }

    return (
        <div className="col-12 col-md-6 col-lg-3 box">
            {props.imagePosition ? (
                <div className={`h-100 bG-${colourChecker(props.colour)}-3`}>
                {props.title !== "" && 
        <div>
        <img className="img-fluid" src={props.image} alt=""/>
        <div className="accordion-box-3" id="accordionFlushExample-3">
            <div className="workstreams-heading" style={{backgroundColor: props.colour}}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="accordion accordion-flush">
                {props.subHeading1 ? props.subHeading1.split(/\r\n|\r|\n/g).map((itemMain, indexMain, arr) => {return (
                <div className="accordion-item" key={indexMain}>
                <h2 className="accordion-header" id={`flush-headingThree-${indexMain}`}>
                {/* <a className="buttons focus button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseThree-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseThree-${indexMain}`}>
                    {itemMain}
                </a> */}
                {indexMain === arr.length - 1 ? <a className={`buttons focus ${colourChecker(props.colour)}-3 accordion-button collapsed `} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseThree-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseThree-${indexMain}`}>{itemMain}</a> :
                <a href="" className={`buttons focus ${colourChecker(props.colour)}-3 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseThree-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseThree-${indexMain}`}>
                    {itemMain}
                </a>}
                </h2>
                {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
                    <div id={`flush-collapseThree-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-3 collapse link-box`} aria-labelledby={`flush-headingThree-${indexMain}`} data-bs-parent="#accordionFlushExample-3">
                    <div className="accordion-body">
                    <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                    </div>
                    </div>
                    );}) : null}
                {/* <div id="flush-collapseOne-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingOne-3" data-bs-parent="#accordionFlushExample-3">
                    <div className="accordion-body">
                        <a href="#">Overview</a>
                    </div>
                </div> */}
            </div>
                )}): null}

                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-3">
                    <a className="buttons focus button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-3" aria-expanded="false" aria-controls="flush-collapseTwo-3">
                        {props.subHeading2}
                    </a>
                    </h2>
                    {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseTwo-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingTwo-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                        <a href={props.href2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseTwo-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingTwo-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree-3">
                    <a className="buttons focus button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-3" aria-expanded="false" aria-controls="flush-collapseThree-3">
                        {props.subHeading3}
                    </a>
                    </h2>
                    {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseThree-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingThree-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                        <a href={props.href3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseThree-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingThree-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour-3">
                        <a className="buttons focus button-3 last-button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-3" aria-expanded="false" aria-controls="flush-collapseFour-3">
                            {props.subHeading4}
                        </a>
                    </h2>
                    {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseFour-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingFour-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                        <a href={props.href2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div className="accordion-collapse-3 collapse link-box" id="flush-collapseFour-3" aria-labelledby="flush-headingFour-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
        </div>}
                </div>
            ): <div>
                        {props.title !== "" && 
        <div>
        <div className="accordion-box-3" id="accordionFlushExample-3">
            <div className="workstreams-heading" style={{backgroundColor: props.colour}}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="accordion accordion-flush" >
            {props.subHeading1 ? props.subHeading1.split(/\r\n|\r|\n/g).map((itemMain, indexMain, arr) => {return (
                <div className="accordion-item" key={indexMain}>
                <h2 className="accordion-header" id={`flush-headingThree-${indexMain}`}>
                {/* <a className="buttons focus button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseThree-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseThree-${indexMain}`}>
                    {itemMain}
                </a> */}
                {indexMain === arr.length - 1 ? <a className={`buttons focus ${colourChecker(props.colour)}-3 accordion-button collapsed last-button-2`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseThree-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseThree-${indexMain}`}>{itemMain}</a> :
                <a href="" className={`buttons focus ${colourChecker(props.colour)}-3 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseThree-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseThree-${indexMain}`}>
                    {itemMain}
                </a>}
                </h2>
                {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
                    <div id={`flush-collapseThree-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-3 collapse link-box`} aria-labelledby={`flush-headingThree-${indexMain}`} data-bs-parent="#accordionFlushExample-3">
                    <div className="accordion-body">
                    <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                    </div>
                    </div>
                    );}) : null}
                {/* <div id="flush-collapseOne-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingOne-3" data-bs-parent="#accordionFlushExample-3">
                    <div className="accordion-body">
                        <a href="#">Overview</a>
                    </div>
                </div> */}
            </div>
                )}): null}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-3">
                    <a className="buttons focus button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-3" aria-expanded="false" aria-controls="flush-collapseTwo-3">
                        {props.subHeading2}
                    </a>
                    </h2>
                    {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseTwo-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingTwo-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                        <a href={props.href2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseTwo-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingTwo-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
                        </div>
                    </div> */}
                {/* </div> */}

                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree-3">
                    <a className="buttons focus button-3 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-3" aria-expanded="false" aria-controls="flush-collapseThree-3">
                       {props.subHeading3}
                    </a>
                    </h2>
                    {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseThree-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingThree-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                        <a href={props.href3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div id="flush-collapseThree-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingThree-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour-3">
                        <a className="buttons focus button-3 last-button-2 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-3" aria-expanded="false" aria-controls="flush-collapseFour-3">
                            {props.subHeading4}
                        </a>
                    </h2>
                    {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseFour-3" className="accordion-collapse-3 collapse link-box" aria-labelledby="flush-headingFour-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                        <a href={props.href2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                    {/* <div className="accordion-collapse-3 collapse link-box" id="flush-collapseFour-3" aria-labelledby="flush-headingFour-3" data-bs-parent="#accordionFlushExample-3">
                        <div className="accordion-body">
                            <a href="#">Overview</a>
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

export default AccordionThreeComponent;
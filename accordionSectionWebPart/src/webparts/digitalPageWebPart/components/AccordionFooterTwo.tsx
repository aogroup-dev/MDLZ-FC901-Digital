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
    subHeading1: string;
    subHeading2: string;
    subHeading3: string;
    link1: string;
    linkHref1: string;
    link2: string;
    linkHref2: string;
    link3: string;
    linkHref3: string;
    link4: string;
    linkHref4: string
    link5: string;
    linkHref5: string
}

function AccordionFooterTwoComponent(props: IAccordionFooterTwo){

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
                <div className={`h-100 bG-${colourChecker(props.colour)}-6`}>
            {props.title !== "" && 
            <div>
                    <img className="img-fluid" src={props.image} alt=""/>
                    <div className="accordion-box-6" id="accordionFlushExample-6">
                        <div className="career-heading" style={{backgroundColor: props.colour}}>
                            <h5 className='headings text-uppercase'>{props.title}</h5>
                        </div>
                        <div className="accordion accordion-flush">
                            {props.subHeading1 ? props.subHeading1.split(/\r\n|\r|\n/g).map((itemMain, indexMain) => {return (
                            <div className="accordion-item" key={indexMain}>
                            <h2 className="accordion-header" id={`flush-headingSix-${indexMain}`}>
                            <a className={`buttons focus career-${colourChecker(props.colour)} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseSix-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseSix-${indexMain}`}>
                                {itemMain}
                            </a>
                            </h2>
                            {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
                            <div id={`flush-collapseSix-${indexMain}`} className={`career-accordion-collapse${colourChecker(props.colour)} collapse link-box`} aria-labelledby={`flush-headingSix-${indexMain}`} data-bs-parent="#accordionFlushExample-6">
                            <div className="accordion-body">
                            <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
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
                            )}) : null}

                            {/* <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo-6">
                                <a className="career-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-6" aria-expanded="false" aria-controls="flush-collapseTwo-6">
                                {props.subHeading2}
                                </a>
                                </h2>
                                {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                                <div id="flush-collapseTwo-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null}
                                {/* <div id="flush-collapseTwo-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                    <a href="#">R&D Academy</a>
                                    </div>
                                </div>                                 */}
                            {/* </div>  */}
                            {/* <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree-6">
                                <a className="career-button buttons accordion-button collapsed button-last" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-6" aria-expanded="false" aria-controls="flush-collapseThree-6">
                                {props.subHeading3}
                                </a>
                                </h2>
                                {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                                <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null} */}
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
                            {/* </div> */}
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
                        {props.subHeading1 ? props.subHeading1.split(/\r\n|\r|\n/g).map((itemMain, indexMain) => {return (
                            <div className="accordion-item" key={indexMain}>
                            <h2 className="accordion-header" id={`flush-headingSix-${indexMain}`}>
                            <a className={`buttons focus career-${colourChecker(props.colour)} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseSix-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapseSix-${indexMain}`}>
                                {itemMain}
                            </a>
                            </h2>
                            {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
                            <div id={`flush-collapseSix-${indexMain}`} className={`career-accordion-collapse${colourChecker(props.colour)} collapse link-box`} aria-labelledby={`flush-headingSix-${indexMain}`} data-bs-parent="#accordionFlushExample-6">
                            <div className="accordion-body">
                            <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
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
                            )}) : null}
                            {/* <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo-6">
                                <a className="career-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-6" aria-expanded="false" aria-controls="flush-collapseTwo-6">
                                {props.subHeading2}
                                </a>
                                </h2>
                                {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                                <div id="flush-collapseTwo-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null} */}
                                {/* <div id="flush-collapseTwo-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-6" data-bs-parent="#accordionFlushExample-6">
                                    <div className="accordion-body">
                                    <a href="#">R&D Academy</a>
                                    </div>
                                </div>                                 */}
                            {/* </div> */}
                            {/* <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree-6">
                                <a className="career-button buttons accordion-button collapsed button-last" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-6" aria-expanded="false" aria-controls="flush-collapseThree-6">
                                {props.subHeading3}
                                </a>
                                </h2>
                                {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                                <div id="flush-collapseThree-6" className="career-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-6" data-bs-parent="#accordionFlushExample-6">
                                <div className="accordion-body">
                                <a href={props.linkHref3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                                </div>
                                </div>
                                );}) : null} */}
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
                            {/* </div> */}
                        </div>
                    </div>
                    <img className="img-fluid" src={props.image} alt=""/>
                </div>}
            </div> }

            </div>

    );
}

export default AccordionFooterTwoComponent;
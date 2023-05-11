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
    subHeading: string;
    subHeading2: string;
    subHeading3: string;
    subHeading4: string;
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
}

function AccordionFooterComponent(props: IAccordionFooter) {

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
                <div className={`h-100 bG-${colourChecker(props.colour)}-5`}>
            {props.title !== "" && 
            <div>
            <img src={props.image} alt="" className="img-fluid"/>
            <div className="accordion-box-5" id="accordionFlushExample-5">
                <div className="news-heading" style={{backgroundColor: props.colour}}>
                    <h5 className='headings text-uppercase'>{props.title}</h5>
                </div>
                <div className="accordion accordion-flush">
                    {props.subHeading ? props.subHeading.split(/\r\n|\r|\n/g).map((itemMain, indexMain) => {return (
                <div className="accordion-item" key={indexMain}>
                <h2 className="accordion-header" id={`flush-heading${indexMain}`}>
                <a className={`buttons focus news-${colourChecker(props.colour)} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${indexMain}`} aria-expanded="false" aria-controls={`flush-collapse${indexMain}`}>
                    {itemMain}
                </a>
                </h2>
                {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((linkItem, linkIndex) => {return (
                <div id={`flush-collapse${indexMain}`} className={`news-accordion-collapse${colourChecker(props.colour)} collapse link-box`} aria-labelledby={`flush-heading${indexMain}`} data-bs-parent="#accordionFlushExample-5">
                <div className="accordion-body">

                <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex] || "#"} key={linkItem}>{linkItem}</a>
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
                    )}): null}
                    
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-5" aria-expanded="false" aria-controls="flush-collapseTwo-5">
                        {props.subHeading2}
                        </a>
                        </h2>
                        {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
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
                    {/* </div>  */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-5" aria-expanded="false" aria-controls="flush-collapseThree-5">
                        {props.subHeading3}
                        </a>
                        </h2>
                        {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null}
                        {/* <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                            <a href="#">News</a>
                            </div>
                        </div>  */}
                    {/* </div>  */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-5" aria-expanded="false" aria-controls="flush-collapseFour-5">
                        {props.subHeading4}
                        </a>
                        </h2>
                        {props.link4 ? props.link4.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseFour-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingFour-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref4.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                        {/* <div id="flush-collapseFour-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingFour-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Success</a>
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
            <div className="accordion-box-5" id="accordionFlushExample-5">
                <div className="news-heading" style={{backgroundColor: props.colour}}>
                    <h5 className='headings text-uppercase'>{props.title}</h5>
                </div>
                <div className="accordion accordion-flush">
                {props.subHeading ? props.subHeading.split(/\r\n|\r|\n/g).map((itemMain, indexMain) => {return (
                <div className="accordion-item" key={indexMain}>
                <h2 className="accordion-header" id={`flush-heading${indexMain}`}>
                <a className={`buttons focus news-${colourChecker(props.colour)} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${indexMain}`} aria-expanded="false" aria-controls={`flush-collapse${indexMain}`}>
                    {itemMain}
                </a>
                </h2>
                {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((linkItem, linkIndex) => {return (
                <div id={`flush-collapse${indexMain}`} className={`news-accordion-collapse${colourChecker(props.colour)} collapse link-box`} aria-labelledby={`flush-heading${indexMain}`} data-bs-parent="#accordionFlushExample-5">
                <div className="accordion-body">

                <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex] || "#"} key={linkItem}>{linkItem}</a>
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
                    )}): null}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-5" aria-expanded="false" aria-controls="flush-collapseTwo-5">
                        {props.subHeading2}
                        </a>
                        </h2>
                        {props.link2 ? props.link2.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseTwo-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingTwo-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref2.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
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
                    {/* </div> */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-5" aria-expanded="false" aria-controls="flush-collapseThree-5">
                        {props.subHeading3}
                        </a>
                        </h2>
                        {props.link3 ? props.link3.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref3.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                        {/* <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                            <a href="#">News</a>
                            </div>
                        </div>  */}
                    {/* </div> */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour-5">
                        <a className="news-button buttons accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-5" aria-expanded="false" aria-controls="flush-collapseFour-5">
                        {props.subHeading4}
                        </a>
                        </h2>
                        {props.link4 ? props.link4.split(/\r\n|\r|\n/g).map((item, index) => {return (
                        <div id="flush-collapseFour-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingFour-5" data-bs-parent="#accordionFlushExample-5">
                        <div className="accordion-body">
                        <a href={props.linkHref4.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>
                        </div>
                        </div>
                        );}) : null} */}
                        {/* <div id="flush-collapseFour-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingFour-5" data-bs-parent="#accordionFlushExample-5">
                            <div className="accordion-body">
                                <a href="#">Success</a>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
            <img src={props.image} alt="" className="img-fluid"/>
        </div>}
            </div>}
        </div>



    );
}
export default AccordionFooterComponent;
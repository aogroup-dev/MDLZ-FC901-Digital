import * as React from 'react';
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

    const colorToButtonClassMap : {[key: string]: string} = {
        "#287819": "buttonGreen",
        "#2d6eaa": "buttonBlue",
        "#e6af23": "buttonYellow",
        "#a52323": "buttonRed",
        "#623e24": "buttonBrown",
        "#724d8d": "buttonPurple",
        "#666666": "buttonGrey",
        "#e18719": "buttonOrange",
    };

    function colourChecker(colour: string) : string{
        return colorToButtonClassMap[colour] || '';
    }


    function checkLinkHrefIndex(index: number): string {
        const hrefs: string[] = [props.href1, props.href2, props.href3, props.href4, props.href5];
        return hrefs[index] || '';
    }

    function checkLinkIndex(index: number): string {
        const links: string[] = [props.link1, props.link2, props.link3, props.link4, props.link5];
        return links[index] || '';
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
                    <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#57479d2e-f06d-445f-8150-c7c3e0a7b318"} key={item}>{item}</a>
                    </div>
                    </div>
                    );}) : null}

            </div>
                )}): null}

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
                    <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#57479d2e-f06d-445f-8150-c7c3e0a7b318"} key={item}>{item}</a>
                    </div>
                    </div>
                    );}) : null}

            </div>
                )}): null}

            </div>
        </div>
        <img className="img-fluid" src={props.image} alt=""/>

        </div>}
                </div>}
    </div>
    );
}

export default AccordionThreeComponent;
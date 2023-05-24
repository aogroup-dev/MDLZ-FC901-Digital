import * as React from 'react';
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
    onLinkClick: (link: string, colour: string, title: string) => void;
}


function AccordionFourComponent(props: IAccordionFour) : JSX.Element{

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

    const handleLinkClick = (link: string, colour: string, title: string) => {
        props.onLinkClick(link, colour, title);
    }

    const allowedExtensions = ["bmp", "doc", "docx", "htm", "html", "jpg", "jpeg", "pdf", "png", "ppt", "pptx", "tiff", "txt", "xls", "xlsx"];

    function filterLinks(link: string) : boolean {
        const extension = link.split(".").pop()?.toLowerCase();
        if (allowedExtensions.indexOf(extension) !== -1) {
            return true;
        } else {
            return false;
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
                    {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]) ? <a href='#toolbox' onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)} key={item}>{item}</a> : <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#"} onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)} target='_blank' rel="noreferrer" key={item}>{item}</a>}
                    
                    </div>
                    </div>
                    );}) : null}

            </div>
                )}): null}

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
                    {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]) ? <a href='#toolbox' onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)} key={item}>{item}</a> : <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index] || "#"} onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)} target='_blank' rel="noreferrer" key={item}>{item}</a>}
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
export default AccordionFourComponent;
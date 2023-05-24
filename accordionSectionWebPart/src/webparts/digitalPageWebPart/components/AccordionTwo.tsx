import * as React from 'react';
import '../components/AccordionComponent.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface IAccordionTwo{
    image: string;
    title: string;
    colour: string;
    imagePosition: boolean;
    subHeading: string;
    subHeadingNoIcon: string;
    subHeadingLink: string;
    link1: string;
    linkHref1: string;
    link2: string;
    linkHref2: string;
    link3: string;
    linkHref3: string;
    link4: string;
    linkHref4: string;
    onLinkClick: (link: string, colour: string, title: string) => void;

}


function AccordionTwoComponent(props: IAccordionTwo): JSX.Element{


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
        const hrefs: string[] = [props.linkHref1, props.linkHref2, props.linkHref3, props.linkHref4];
        return hrefs[index] || '';
    }


        function checkLinkIndex(index: number): string {
            const links: string[] = [props.link1, props.link2, props.link3, props.link4];
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

        {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
            <div id={`flush-collapseTwo-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-1 collapse link-box`} aria-labelledby={`flush-headingTwo-${indexMain}`} data-bs-parent="#accordionFlushExample-2">
            <div className="accordion-body">
            {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]) ? <a href='#toolbox' key={item} onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)}>{item}</a> : <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]} key={item} target='_blank' rel="noreferrer" onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)}>{item}</a>}
            </div>
            </div>
            );}) : null}

    </div>
                )}): null}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo-2">
                    {filterLinks(props.subHeadingLink) ? <a href="#toolbox" className={`buttons focus ${colourChecker(props.colour)}-2 accordion-button collapsed no-plus`} onClick={() => handleLinkClick(props.subHeadingLink, props.colour, props.subHeadingNoIcon)}>{props.subHeadingNoIcon}</a> : <a href={props.subHeadingLink} target='_blank' rel="noreferrer" className={`buttons focus ${colourChecker(props.colour)}-2 accordion-button collapsed no-plus`} onClick={() => handleLinkClick(props.subHeadingLink, props.colour, props.subHeadingNoIcon)}>{props.subHeadingNoIcon}</a>}
                    
                    </h2>
                </div>

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


        {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((item, index) => {return (
            <div id={`flush-collapseTwo-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-2 collapse link-box`} aria-labelledby={`flush-headingTwo-${indexMain}`} data-bs-parent="#accordionFlushExample-2">
            <div className="accordion-body">
            {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]) ? <a href='#toolbox' key={item} onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)}>{item}</a> : <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]} key={item} target='_blank' rel="noreferrer" onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)}>{item}</a>}
            </div>
            </div>
            );}) : null}

    </div>
                )}): null}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour-2">
                    {filterLinks(props.subHeadingLink) ? <a href="#toolbox" className={`buttons focus ${colourChecker(props.colour)}-2 accordion-button collapsed no-plus`} onClick={() => handleLinkClick(props.subHeadingLink, props.colour, props.subHeadingNoIcon)}>{props.subHeadingNoIcon}</a> : <a href={props.subHeadingLink} target='_blank' rel="noreferrer" className={`buttons focus ${colourChecker(props.colour)}-2 accordion-button collapsed no-plus`} onClick={() => handleLinkClick(props.subHeadingLink, props.colour, props.subHeadingNoIcon)}>{props.subHeadingNoIcon}</a>}
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
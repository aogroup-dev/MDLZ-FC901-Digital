import * as React from 'react';
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
    onLinkClick: (link: string, colour: string, title: string) => void;
}

function AccordionFooterTwoComponent(props: IAccordionFooterTwo){

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

    function checkLinkIndex(index: number): string {
        const links: string[] = [props.link1, props.link2, props.link3, props.link4, props.link5];
        return links[index] || '';
    }

    function checkLinkHrefIndex(index: number): string {
        const hrefs: string[] = [props.linkHref1, props.linkHref2, props.linkHref3, props.linkHref4, props.linkHref5];
        return hrefs[index] || '';
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
                            {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]) ? <a href='#toolbox' onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)} key={item}>{item}</a> :
                            <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]} onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)} target='_blank' key={item}>{item}</a>}
                            
                            </div>
                            </div>
                            );}) : null}

                        </div>
                            )}) : null}

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
                            {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]) ? <a href='#toolbox' onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)} key={item}>{item}</a> : <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index]} onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[index], props.colour, item)} target='_blank' key={item}>{item}</a>}
                            </div>
                            </div>
                            );}) : null}

                        </div>
                            )}) : null}

                        </div>
                    </div>
                    <img className="img-fluid" src={props.image} alt=""/>
                </div>}
            </div> }

            </div>

    );
}

export default AccordionFooterTwoComponent;
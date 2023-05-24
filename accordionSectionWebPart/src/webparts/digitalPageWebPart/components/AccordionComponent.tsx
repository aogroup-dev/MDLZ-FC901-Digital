import * as React from 'react';
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
    onLinkClick: (link: string, colour: string,title: string) => void;
    // onColourChange: (colour: string) => void;
}

function AccordionSection(props: IAccordionSection) : JSX.Element{

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
        props.onLinkClick(link, colour,title);
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
                            
                            {checkLinkIndex(indexMain) ? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((linkItem, linkIndex) => {return (
                            <div id={`flush-collapse-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-1 collapse link-box`} aria-labelledby={`flush-heading-${indexMain}`} data-bs-parent="#accordionFlushExample">
                        
                            <div className="accordion-body">

                                {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex]) ? <a href='#toolbox' onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex], props.colour, linkItem)} key={linkItem}>{linkItem}</a> : <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex] || "#"} target='_blank' rel="noreferrer" onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex], props.colour, linkItem)} key={linkItem}>{linkItem}</a>}

                            </div>

                        
                        </div>

                        
                        );}) : null}

                    </div>
                    )}): null}

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
                    <div className="accordion accordion-flush" >
                    {props.subHeading ? props.subHeading.split(/\r\n|\r|\n/g).map((item, indexMain, arr) => {return (
                        <div className="accordion-item" key={indexMain}>
                        <h2 className="accordion-header" id={`flush-heading-${indexMain}`}>

                            {indexMain === arr.length - 1 ? <a className={`buttons focus ${colourChecker(props.colour)}-1 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapse-${indexMain}`}>{item}</a> :
                            <a href="" className={`buttons focus ${colourChecker(props.colour)}-1 accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${indexMain}`} aria-expanded="false" aria-controls={`flush-collapse-${indexMain}`}>
                                {item}
                            </a>} 
                            
                            
                            </h2>
                            
                        {checkLinkIndex(indexMain)? checkLinkIndex(indexMain).split(/\r\n|\r|\n/g).map((linkItem, linkIndex) => {return (
                        <div id={`flush-collapse-${indexMain}`} className={`accordion-collapse${colourChecker(props.colour)}-1 collapse link-box`} aria-labelledby={`flush-heading-${indexMain}`} data-bs-parent="#accordionFlushExample">
                        
                        <div className="accordion-body">
                        
                        {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex]) ? <a href='#toolbox' onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex], props.colour, linkItem)} key={linkItem}>{linkItem}</a> : <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex] || "#"} target='_blank' rel="noreferrer" onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex], props.colour, linkItem)} key={linkItem}>{linkItem}</a>}
                        
                        </div>
                        
                        </div>
                        
                        );}) : null}

                        </div>
                    )}): null}

                    </div>
                    <div>
                    <img className="img-fluid" src={props.image} alt=""/>
                    </div>
                </div>}
            </div>}
    </div>

);
}
export default AccordionSection;



import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss';


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
    onLinkClick: (link: string, colour: string, title: string) => void;
}

function AccordionFooterComponent(props: IAccordionFooter) : JSX.Element{

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
                <>
            {props.title !== "" && 
            <div className={`h-100 bG-${colourChecker(props.colour)}-5`}>
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
                {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex]) ? <a href='#toolbox' onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex], props.colour, linkItem)} key={linkItem}>{linkItem}</a> : <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex] || "#"} onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex], props.colour, linkItem)} target='_blank' rel="noreferrer" key={linkItem}>{linkItem}</a>}
                </div>
                </div>
                );}) : null}

            </div>
                    )}): null}

                </div>
            </div>
            </div>
        </div>}
        </>
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

                {filterLinks(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex]) ? <a href='#toolbox' onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex], props.colour, linkItem)} key={linkItem}>{linkItem}</a> : <a href={checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex] || "#"} onClick={() => handleLinkClick(checkLinkHrefIndex(indexMain).split(/\r\n|\r|\n/g)[linkIndex], props.colour, linkItem)} target='_blank' rel="noreferrer" key={linkItem}>{linkItem}</a>}
                </div>
                </div>
                );}) : null}

            </div>
                    )}): null}

                </div>
            </div>
            <img src={props.image} alt="" className="img-fluid"/>
        </div>}
            </div>}
        </div>



    );
}
export default AccordionFooterComponent;
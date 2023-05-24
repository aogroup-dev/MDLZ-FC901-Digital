import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss';

interface IFooterLinkBox{
    image: string;
    title: string;
    colour: string;
    imagePosition: boolean;
    link1: string;
    linkHref1: string;
}


function FooterLinkBoxComponent(props: IFooterLinkBox): JSX.Element {

    
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

    return (
        <div className="col-12 col-md-6 col-lg-3 box">
            {props.imagePosition ? (
                <div className={`h-100 bG-${colourChecker(props.colour)}-8`}>
        {props.title !== "" && 
        <div>
        <div className={`digital-links-box  body-${colourChecker(props.colour)}`}  style={{backgroundImage: `url(${props.image})`}}>
            <div className={`digital-Quick-links header-${colourChecker(props.colour)}`}>
                <h5 className='text-uppercase headings'>{props.title}</h5>
            </div>
            {props.link1 ? props.link1.split(/\r\n|\r|\n/g).map((item, index, arr) => { return (
            <div className="e-links">
                {index === arr.length -1 ? <a className='bottom-link text-nowrap' href={props.linkHref1.split(/\r\n|\r|\n/g).pop() || "#"} key={item} target='_blank' rel="noreferrer">{item}</a> : <a className='link' href={props.linkHref1.split(/\r\n|\r|\n/g)[index] || "#"} key={item} target='_blank' rel="noreferrer">{item}</a>}
                <div className="img-pic">
                    {/* <img src={img} alt="" className="img-fluid picture"/> */}
                </div>
            </div>
            )}): null}
        </div>
    </div>}
                </div>
            ) : <div>
        {props.title !== "" && 
        <div>
        <div className={`digital-links-box  body-${colourChecker(props.colour)}`}  style={{backgroundImage: `url(${props.image})`}}>
            <div className={`digital-Quick-links header-${colourChecker(props.colour)}`}>
                <h5 className='text-uppercase headings'>{props.title}</h5>
            </div>
            {/* <img className/='img-fluid' src={img} alt="" /> */}
            {props.link1 ? props.link1.split(/\r\n|\r|\n/g).map((item, index, arr) => { return (
            <div className="e-links">
                <div className="img-pic">
                    {/* <img src={img} alt="" className="img-fluid picture"/> */}
                </div>
                {index === arr.length -1 ? <a className='bottom-link text-nowrap' href={props.linkHref1.split(/\r\n|\r|\n/g).pop() || "#"} key={item} target='_blank' rel="noreferrer">{item}</a> : <a  className='link' href={props.linkHref1.split(/\r\n|\r|\n/g)[index] || "#"} key={item} target='_blank' rel="noreferrer">{item}</a>}
            </div>
            )}): null}
        </div>
    </div>}
                </div>}
</div>
    );
}

export default FooterLinkBoxComponent;
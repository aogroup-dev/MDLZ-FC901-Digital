import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss';

interface IFooterLinks{
    image: string;
    title: string;
    colour: string;
    imagePosition: boolean;
    link1: string;
    linkHref1: string;
}

function FooterLinksComponent(props: IFooterLinks){

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
            <div className={`h-100 bG-${colourChecker(props.colour)}-7`}>
                {props.title !== "" && 
        <div>
        <img src={props.image} alt="" className="img-fluid"/>
        <div className={`grey-digital-links body-${colourChecker(props.colour)}-1`}>
            <div className={`enterpise-digital-links header-${colourChecker(props.colour)}-1`}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="e-links">
            {props.link1 ? props.link1.split(/\r\n|\r|\n/g).map((item, index, arr) =>{return (
                <div>
                    {index === arr.length - 1 ? <a className='bottom-link' href={props.linkHref1.split(/\r\n|\r|\n/g).pop() || "#57479d2e-f06d-445f-8150-c7c3e0a7b318"} key={item}>{item}</a> : <a className='link' href={props.linkHref1.split(/\r\n|\r|\n/g)[index] || "#57479d2e-f06d-445f-8150-c7c3e0a7b318"} key={item}>{item}</a>}
                </div>
                );}) : null}
                </div>
        </div>
        </div>}
            </div>
        ) : <div>
            {props.title !== "" && 
        <div>
        <div className={`grey-digital-links body-${colourChecker(props.colour)}-1`}>
            <div className={`enterpise-digital-links header-${colourChecker(props.colour)}-1`}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="e-links">
            {props.link1 ? props.link1.split(/\r\n|\r|\n/g).map((item, index, arr) =>{return (
                <div>
                    {index === arr.length - 1 ? <a className='bottom-link' href={props.linkHref1.split(/\r\n|\r|\n/g).pop() || "#57479d2e-f06d-445f-8150-c7c3e0a7b318"} key={item}>{item}</a> : <a className='link' href={props.linkHref1.split(/\r\n|\r|\n/g)[index] || "#57479d2e-f06d-445f-8150-c7c3e0a7b318"} key={item}>{item}</a>}
                </div>
                );}) : null}
                </div>
        </div>
        <img src={props.image} alt="" className="img-fluid"/>
        </div>}
            </div>}
    </div>

    );
}
export default FooterLinksComponent;
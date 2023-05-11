import * as React from 'react';
// import img from '../assets/links.png';
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


function FooterLinkBoxComponent(props: IFooterLinkBox) {

    
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
                {index == arr.length -1 ? <a className='bottom-link text-nowrap' href={props.linkHref1.split(/\r\n|\r|\n/g).pop() || "#"} key={item}>{item}</a> : <a className='link' href={props.linkHref1.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>}
                {/* <a href="#" className="link">Wiki / FAQs &gt;</a>
                <a href="#" className="link">Material Properties Database &gt;</a>
                <a href="#" className="link">MATILDA &gt;</a>                            
                <a href="#" className="bottom-link text-nowrap">Digital BGCM SharePoint&gt;</a> */}
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
                {index == arr.length -1 ? <a className='bottom-link text-nowrap' href={props.linkHref1.split(/\r\n|\r|\n/g).pop() || "#"} key={item}>{item}</a> : <a className='link' href={props.linkHref1.split(/\r\n|\r|\n/g)[index] || "#"} key={item}>{item}</a>}
                {/* <a href="#" className="link">Wiki / FAQs &gt;</a>
                <a href="#" className="link">Material Properties Database &gt;</a>
                <a href="#" className="link">MATILDA &gt;</a>                            
                <a href="#" className="bottom-link text-nowrap">Digital BGCM SharePoint&gt;</a> */}
            </div>
            )}): null}
        </div>
    </div>}
                </div>}
</div>
    );
}

export default FooterLinkBoxComponent;
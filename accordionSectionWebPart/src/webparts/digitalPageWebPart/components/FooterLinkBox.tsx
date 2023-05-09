import * as React from 'react';
import img from '../assets/links.png';
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

    return (
        <div className="col col-md-6 col-lg-3 box">
            {props.imagePosition ? (
                <div>
        {props.title !== "" && 
        <div>
        <div className="digital-links-box"  style={{backgroundImage: `url(${props.image})`}}>
            <div className="digital-Quick-links"  style={{backgroundColor: props.colour}}>
                <h5 className='text-uppercase headings'>{props.title}</h5>
            </div>
            {props.link1 ? props.link1.split("~").map((item, index, arr) => { return (
            <div className="e-links">
                {index == arr.length -1 ? <a className='bottom-link text-nowrap' href={props.linkHref1.split("~").pop() || "#"} key={item}>{item}</a> : <a className='link' href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>}
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
        <div className="digital-links-box">
            <div className="digital-Quick-links"  style={{backgroundColor: props.colour}}>
                <h5 className='text-uppercase headings'>{props.title}</h5>
            </div>
            <img className='img-fluid' src={img} alt="" />
            {props.link1 ? props.link1.split("~").map((item, index, arr) => { return (
            <div className="e-links">
                <div className="img-pic">
                    {/* <img src={img} alt="" className="img-fluid picture"/> */}
                </div>
                {index == arr.length -1 ? <a className='bottom-link text-nowrap' href={props.linkHref1.split("~").pop() || "#"} key={item}>{item}</a> : <a className='link' href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>}
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
import * as React from 'react';
// import img from '../assets/enterprise.jpg';
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

    return (

        <div className="col col-md-6 col-lg-3 box">
        {props.imagePosition ? (
            <div>
                {props.title !== "" && 
        <div>
        <img src={props.image} alt="" className="img-fluid"/>
        <div className="grey-digital-links">
            <div className="enterpise-digital-links" style={{backgroundColor: props.colour}}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="e-links">
            {props.link1 ? props.link1.split("~").map((item, index, arr) =>{return (
                <div>
                    {/* index == props.link1.split("~").length -1 ?  <a className='bottom-link' href={props.linkHref1.split("~").pop() || "#"}>{lastLink}</a>  : <a className='link' href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>  */}
                    {index== arr.length - 1 ? <a className='bottom-link' href={props.linkHref1.split("~").pop() || "#"} key={item}>{item}</a> : <a className='link' href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>}
                    {/* loc_array[loc_array.length - 1] */}
                {/* <a className='link' href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a> */}
                    {/* <h1>{props.link1.split("~")[props.link1.split("~").length -1]}</h1> */}
                {/* <a href="#" className="link">Let&apos;s Get Digital</a>
                <a href="#" className="link">D4GV SharePoint</a>
            <a href="#" className="bottom-link">Digital Capability Hub</a> */}
                
                {/* // <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                // <div className="accordion-body">
                // <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                // </div>
            // </div> */}
                </div>
                            );}) : null}
                            {/* <a className='bottom-link' href={props.linkHref1.split("~").pop() || "#"}>{lastLink}</a>  */}
                            </div>
        </div>
        </div>}
            </div>
        ) : <div>
                    {props.title !== "" && 
        <div>
        <div className="grey-digital-links">
            <div className="enterpise-digital-links" style={{backgroundColor: props.colour}}>
                <h5 className='headings text-uppercase'>{props.title}</h5>
            </div>
            <div className="e-links">
            {props.link1 ? props.link1.split("~").map((item, index, arr) =>{return (
                <div>
                    {/* index == props.link1.split("~").length -1 ?  <a className='bottom-link' href={props.linkHref1.split("~").pop() || "#"}>{lastLink}</a>  : <a className='link' href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>  */}
                    {index== arr.length - 1 ? <a className='bottom-link' href={props.linkHref1.split("~").pop() || "#"} key={item}>{item}</a> : <a className='link' href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a>}
                    {/* loc_array[loc_array.length - 1] */}
                {/* <a className='link' href={props.linkHref1.split("~")[index] || "#"} key={item}>{item}</a> */}
                    {/* <h1>{props.link1.split("~")[props.link1.split("~").length -1]}</h1> */}
                {/* <a href="#" className="link">Let&apos;s Get Digital</a>
                <a href="#" className="link">D4GV SharePoint</a>
            <a href="#" className="bottom-link">Digital Capability Hub</a> */}
                
                {/* // <div id="flush-collapseThree-5" className="news-accordion-collapse collapse link-box" aria-labelledby="flush-headingThree-5" data-bs-parent="#accordionFlushExample-5">
                // <div className="accordion-body">
                // <a href={props.linkHref3.split("~")[index] || "#"} key={item}>{item}</a>
                // </div>
            // </div> */}
                </div>
                            );}) : null}
                            {/* <a className='bottom-link' href={props.linkHref1.split("~").pop() || "#"}>{lastLink}</a>  */}
                            </div>
        </div>
        <img src={props.image} alt="" className="img-fluid"/>
        </div>}
            </div>}
    </div>

    );
}
export default FooterLinksComponent;
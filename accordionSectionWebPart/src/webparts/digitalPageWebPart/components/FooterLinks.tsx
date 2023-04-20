import * as React from 'react';
import img from '../assets/enterprise.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss';



function FooterLinksComponent(){

    return (

        <div className="col col-md-6 col-lg-3 box-7">
        <img src={img} alt="" className="img-fluid"/>
        <div className="grey-digital-links">
            <div className="enterpise-digital-links2 headings">
                <h6>ENTERPRISE DIGITAL LINKS</h6>
            </div>
            <div className="e-links">
                <a href="#" className="link">Let&apos;s Get Digital</a>
                <a href="#" className="link">D4GV SharePoint</a>
                <a href="#" className="bottom-link">Digital Capability Hub</a>
                
            </div>
        </div>
    </div>

    );
}
export default FooterLinksComponent;
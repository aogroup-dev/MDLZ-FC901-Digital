import * as React from 'react';
// import img from '../assets/links.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss';



function FooterLinkBoxComponent() {

    return (
        <div className="col col-md-6 col-lg-3 box">
        <div className="digital-links-box">
            <div className="digital-Quick-links">
                <h5 className='text-uppercase headings'>Enterprise Digital Links</h5>
            </div>
            <div className="e-links">
                <a href="#" className="link">Wiki / FAQs &gt;</a>
                <a href="#" className="link">Material Properties Database &gt;</a>
                <a href="#" className="link">MATILDA &gt;</a>                            
                <a href="#" className="bottom-link text-nowrap">Digital BGCM SharePoint&gt;</a>
                <div className="img-pic">
                    {/* <img src={img} alt="" className="img-fluid picture"/> */}
                </div>
            </div>
        </div>
</div>
    );
}

export default FooterLinkBoxComponent;
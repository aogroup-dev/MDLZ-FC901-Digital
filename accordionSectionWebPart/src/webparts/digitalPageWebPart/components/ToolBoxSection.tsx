import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss'



function ToolBoxSectionComponent() {

    return (
        <section id='toolbox' className="toolbox-section" style={{display: 'none'}}>
            <div className="toolbox-header">
                <h5 className='text-uppercase text-white text-center'>R&D digital toolbox user guide</h5>
            </div>
        </section>
    );

}

export default ToolBoxSectionComponent;

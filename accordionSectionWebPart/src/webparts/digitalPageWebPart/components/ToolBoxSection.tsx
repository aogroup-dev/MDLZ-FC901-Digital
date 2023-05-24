import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";


interface IToolBoxSection{
    selectedLink: string;
    selectedColour: string;
    selectedText: string;
}



function ToolBoxSectionComponent(props: IToolBoxSection) : JSX.Element {

    const colorToButtonClassMap : {[key: string]: string} = {
        "#287819": "#72a769",
        "#2d6eaa": "#81a8cc",
        "#e6af23": "#edc765",
        "#a52323": "#c97b7b",
        "#623e24": "#917861",
        "#724d8d": "#957aa9",
        "#666666": "#9d9d9d",
        "#e18719": "#eaab5ee",
    };

    function colourChecker(colour: string) : string{
        return colorToButtonClassMap[colour] || '';
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

    const docs = [
        { uri: props.selectedLink },
    ];

   // https://collaboration.mdlz.com/:b:/r/sites/DigitalResearchandDevelopment/Shared%20Documents/purpose/Digital-R-D-Home_Sona%20and%20Nicx%20comments.pdf


    return (
        <div>


            {filterLinks(props.selectedLink) && (
                <div id='toolbox'>
                    <div className="toolbox-header" style={{backgroundColor: props.selectedColour}}>
                        <h5 className='text-uppercase text-white text-center headings'>{props.selectedText}</h5>
                    </div>

                    <DocViewer documents={docs} style={{backgroundColor: colourChecker(props.selectedColour)}} className='toolbox-section' pluginRenderers={DocViewerRenderers} config={{
                        header: {
                            disableHeader: true,
    
                        }
                    }}/>
                    </div>

            )}
        </div>
    );

}

export default ToolBoxSectionComponent;

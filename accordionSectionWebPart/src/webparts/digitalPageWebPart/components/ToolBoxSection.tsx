import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { RichText } from "@pnp/spfx-controls-react/lib/RichText";




function ToolBoxSectionComponent() {

    // function getCKeditor(){
        
    //     ClassicEditor.create( document.querySelector( '#editor' ) as HTMLElement )
    //     .then( editor => {
    //     console.log( editor );
    //     } )
    //     .catch( error => {
    //     console.error( error );
    //     } );
    // }

    
// const YourComponent: React.FC = () => {
    // React.useEffect(() => {
    //   const editorElement = document.getElementById('editor');
    //   if (editorElement) {
    //     ClassicEditor.create(editorElement)
    //       .then((editor) => {
    //         console.log(editor);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    // }, []);

    return (
        <section id='toolbox' className="toolbox-section" style={{display: 'none'}}>
            <div className="toolbox-header">
                <h5 className='text-uppercase text-white text-center headings'>R&D digital toolbox user guide</h5>
            </div>
            {/* <RichText value={this.props.value}
            onChange={(text)=>this.onTextChange(text)}/> */}
        {/* {getCKeditor} */}
            {/* <div className="toolbox-header">
            </div> */}

        </section>
    );

}

export default ToolBoxSectionComponent;

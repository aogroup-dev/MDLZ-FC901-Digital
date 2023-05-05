import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/AccordionComponent.scss';
import { IDigitalPageWebPartProps } from './IDigitalPageWebPartProps';
import AccordionSection from './AccordionComponent';
import AccordionTwoComponent from './AccordionTwo';
import AccordionThreeComponent from './AccordionThree';
import AccordionFourComponent from './AccordionFour';
import AccordionFooterComponent from './AccordionFooter';
import AccordionFooterTwoComponent from './AccordionFooterTwo';
import FooterLinksComponent from './FooterLinks';
import FooterLinkBoxComponent from './FooterLinkBox';

export default class DigitalPageWebPart extends React.Component<IDigitalPageWebPartProps, {}> {
  public render(): React.ReactElement<IDigitalPageWebPartProps> {
    const {
      image1,
      title1,
      colour1,
      image2,
      title2,
      colour2,
      image3,
      title3,
      colour3,
      image4,
      title4,
      colour4,
 } = this.props;

    return (
      <section>
        <div className='container main p-0'>
          <div className='row'>
          <AccordionSection image={image1} title={title1} colour={colour1}/>
          <AccordionTwoComponent image={image2} title={title2} colour={colour2}/>
          <AccordionThreeComponent image={image3} title={title3} colour={colour3}/>
          <AccordionFourComponent image={image4} title={title4} colour={colour4}/>
          </div>
          <div className="row footer">
            <AccordionFooterComponent/>
            <AccordionFooterTwoComponent/>
            <FooterLinksComponent/>
            <FooterLinkBoxComponent/>
          </div>
        </div>
      </section>
    );
  }
}

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
import ToolBoxSectionComponent from './ToolBoxSection';

export default class DigitalPageWebPart extends React.Component<IDigitalPageWebPartProps, {}> {
  public render(): React.ReactElement<IDigitalPageWebPartProps> {
    const {
      image1,
      title1,
      colour1,
      test,
      imageOnePosition,

      image2,
      title2,
      colour2,
      imageTwoPosition,

      image3,
      title3,
      colour3,
      imageThreePosition,

      image4,
      title4,
      colour4,
      imageFourPosition,

      image5,
      title5,
      colour5,
      imageFivePosition,

      image6,
      title6,
      colour6,
      imageSixPosition,

      image7,
      title7,
      colour7,
      imageSevenPosition,

      image8,
      title8,
      colour8,
      imageEightPosition,

      boxOneLink1,
      boxOneHref1,
      boxOneLink2,
      boxOneHref2,
      boxOneLink3,
      boxOneHref3,

      boxTwoLink1,
      boxTwoHref1,
      boxTwoLink2,
      boxTwoHref2,
      boxTwoLink3,
      boxTwoHref3,
      boxTwoLink4,
      boxTwoHref4,

      boxThreeLink1,
      boxThreeHref1,
      boxThreeLink2,
      boxThreeHref2,
      boxThreeLink3,
      boxThreeHref3,
      boxThreeLink4,
      boxThreeHref4,

      boxFourLink1,
      boxFourHref1,
      boxFourLink2,
      boxFourHref2,
      boxFourLink3,
      boxFourHref3,

      boxFiveLink1,
      boxFiveHref1,
      boxFiveLink2,
      boxFiveHref2,
      boxFiveLink3,
      boxFiveHref3,
      boxFiveLink4,
      boxFiveHref4,

      boxSixLink1,
      boxSixHref1,
      boxSixLink2,
      boxSixHref2,
      boxSixLink3,
      boxSixHref3,

      boxSevenLink1,
      boxSevenHref1,

      boxEightLink1,
      boxEightHref1,


 } = this.props;


    return (
      <section>
        <div className='container main p-0'>
          <div className='row'>
          <AccordionSection image={image1} test={test} imagePosition={imageOnePosition} title={title1} colour={colour1} link1={boxOneLink1} linkHref1={boxOneHref1} link2={boxOneLink2} linkHref2={boxOneHref2} link3={boxOneLink3} linkHref3={boxOneHref3}/>
          <AccordionTwoComponent image={image2} imagePosition={imageTwoPosition} title={title2} colour={colour2} link1={boxTwoLink1} linkHref1={boxTwoHref1} link2={boxTwoLink2} linkHref2={boxTwoHref2} link3={boxTwoLink3} linkHref3={boxTwoHref3} link4={boxTwoLink4} linkHref4={boxTwoHref4}/>
          <AccordionThreeComponent image={image3} imagePosition={imageThreePosition} title={title3} colour={colour3} link1={boxThreeLink1} href1={boxThreeHref1} link2={boxThreeLink2} href2={boxThreeHref2} link3={boxThreeLink3} href3={boxThreeHref3} link4={boxThreeLink4} href4={boxThreeHref4}/>
          <AccordionFourComponent image={image4} imagePosition={imageFourPosition} title={title4} colour={colour4} link1={boxFourLink1} href1={boxFourHref1} link2={boxFourLink2} href2={boxFourHref2} link3={boxFourLink3} href3={boxFourHref3}/>
          </div>
          <div className="row footer">
            <AccordionFooterComponent image={image5} imagePosition={imageFivePosition} title={title5} colour={colour5} link1={boxFiveLink1} linkHref1={boxFiveHref1} link2={boxFiveLink2} linkHref2={boxFiveHref2} link3={boxFiveLink3} linkHref3={boxFiveHref3} link4={boxFiveLink4} linkHref4={boxFiveHref4}/>
            <AccordionFooterTwoComponent image={image6} imagePosition={imageSixPosition} title={title6} colour={colour6} link1={boxSixLink1} linkHref1={boxSixHref1} link2={boxSixLink2} linkHref2={boxSixHref2} link3={boxSixLink3} linkHref3={boxSixHref3}/>
            <FooterLinksComponent image={image7} imagePosition={imageSevenPosition} title={title7} colour={colour7} link1={boxSevenLink1} linkHref1={boxSevenHref1}/>
            <FooterLinkBoxComponent image={image8} imagePosition={imageEightPosition} title={title8} colour={colour8} link1={boxEightLink1} linkHref1={boxEightHref1}/>
          </div>
          <ToolBoxSectionComponent/>
        </div>
      </section>
    );
  }
}

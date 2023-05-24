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


    // Define the initial state
    state: {
      selectedPdfLink: string;
      selectedColour: string;
      selectedTitle: string;
    } = {
      selectedPdfLink: '',
      selectedColour: '',
      selectedTitle: '',
    };
  
    constructor(props: IDigitalPageWebPartProps) {
      super(props);
  
      // Bind the method to the component instance
      this.handleStateChange = this.handleStateChange.bind(this);
    }
  
    handleStateChange(link: string, colour: string, title: string) {
      this.setState({ selectedPdfLink: link, selectedColour: colour, selectedTitle: title });
    }

  public render(): React.ReactElement<IDigitalPageWebPartProps> {
    
    const { selectedPdfLink, selectedColour, selectedTitle } = this.state;
  
    // console.log(selectedPdfLink);
    
    const {
      image1,
      title1,
      colour1,
      imageOnePosition,
      boxOnesubHeading1,
      boxOnesubHeading2,

      image2,
      title2,
      colour2,
      imageTwoPosition,
      subHeading,
      subHeadingLink,
      subHeadingNoIcon,


      image3,
      title3,
      colour3,
      imageThreePosition,
      boxThreesubHeading1,
      boxThreesubHeading2,
      boxThreesubHeading3,
      boxThreesubHeading4,

      image4,
      title4,
      colour4,
      imageFourPosition,
      boxFoursubHeading1,
      boxFoursubHeading2,
      boxFoursubHeading3,


      image5,
      title5,
      colour5,
      imageFivePosition,
      boxFivesubHeading1,
      boxFivesubHeading2,
      boxFivesubHeading3,
      boxFivesubHeading4,


      image6,
      title6,
      colour6,
      imageSixPosition,
      boxSixsubHeading1,
      boxSixsubHeading2,
      boxSixsubHeading3,

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
      boxOneLink4,
      boxOneHref4,
      boxOneLink5,
      boxOneHref5,

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
      boxThreeLink5,
      boxThreeHref5,


      boxFourLink1,
      boxFourHref1,
      boxFourLink2,
      boxFourHref2,
      boxFourLink3,
      boxFourHref3,
      boxFourLink4,
      boxFourHref4,
      boxFourLink5,
      boxFourHref5,

      boxFiveLink1,
      boxFiveHref1,
      boxFiveLink2,
      boxFiveHref2,
      boxFiveLink3,
      boxFiveHref3,
      boxFiveLink4,
      boxFiveHref4,
      boxFiveLink5,
      boxFiveHref5,

      boxSixLink1,
      boxSixHref1,
      boxSixLink2,
      boxSixHref2,
      boxSixLink3,
      boxSixHref3,
      boxSixLink4,
      boxSixHref4,
      boxSixLink5,
      boxSixHref5,

      boxSevenLink1,
      boxSevenHref1,

      boxEightLink1,
      boxEightHref1,



 } = this.props;




    return (
      <section>
        <div className='container main p-0'>
          <div className='row'>
          <AccordionSection onLinkClick={this.handleStateChange}  image={image1} subHeading={boxOnesubHeading1} subHeadingLinks={boxOnesubHeading2} imagePosition={imageOnePosition} title={title1} colour={colour1} link1={boxOneLink1} linkHref1={boxOneHref1} link2={boxOneLink2} linkHref2={boxOneHref2} link3={boxOneLink3} linkHref3={boxOneHref3} link4={boxOneLink4} linkHref4={boxOneHref4} link5={boxOneLink5} linkHref5={boxOneHref5}/>
          <AccordionTwoComponent onLinkClick={this.handleStateChange} image={image2} subHeading={subHeading} subHeadingNoIcon={subHeadingNoIcon} subHeadingLink={subHeadingLink} imagePosition={imageTwoPosition} title={title2} colour={colour2} link1={boxTwoLink1} linkHref1={boxTwoHref1} link2={boxTwoLink2} linkHref2={boxTwoHref2} link3={boxTwoLink3} linkHref3={boxTwoHref3} link4={boxTwoLink4} linkHref4={boxTwoHref4}/>
          <AccordionThreeComponent onLinkClick={this.handleStateChange} link5={boxThreeLink5} href5={boxThreeHref5} image={image3} subHeading1={boxThreesubHeading1} subHeading2={boxThreesubHeading2} subHeading3={boxThreesubHeading3} subHeading4={boxThreesubHeading4} imagePosition={imageThreePosition} title={title3} colour={colour3} link1={boxThreeLink1} href1={boxThreeHref1} link2={boxThreeLink2} href2={boxThreeHref2} link3={boxThreeLink3} href3={boxThreeHref3} link4={boxThreeLink4} href4={boxThreeHref4}/>
          <AccordionFourComponent onLinkClick={this.handleStateChange} link4={boxFourLink4} link5={boxFourLink5} href4={boxFourHref4} href5={boxFourHref5} image={image4} subHeading1={boxFoursubHeading1} subHeading2={boxFoursubHeading2} subHeading3={boxFoursubHeading3} imagePosition={imageFourPosition} title={title4} colour={colour4} link1={boxFourLink1} href1={boxFourHref1} link2={boxFourLink2} href2={boxFourHref2} link3={boxFourLink3} href3={boxFourHref3}/>
          </div>
          <div className="row footer">
            <AccordionFooterComponent onLinkClick={this.handleStateChange} link5={boxFiveLink5} linkHref5={boxFiveHref5} image={image5} subHeading={boxFivesubHeading1} subHeading2={boxFivesubHeading2} subHeading3={boxFivesubHeading3} subHeading4={boxFivesubHeading4} imagePosition={imageFivePosition} title={title5} colour={colour5} link1={boxFiveLink1} linkHref1={boxFiveHref1} link2={boxFiveLink2} linkHref2={boxFiveHref2} link3={boxFiveLink3} linkHref3={boxFiveHref3} link4={boxFiveLink4} linkHref4={boxFiveHref4}/>
            <AccordionFooterTwoComponent onLinkClick={this.handleStateChange} link4={boxSixLink4} link5={boxSixLink5} linkHref4={boxSixHref4} linkHref5={boxSixHref5} image={image6} subHeading1={boxSixsubHeading1} subHeading2={boxSixsubHeading2} subHeading3={boxSixsubHeading3} imagePosition={imageSixPosition} title={title6} colour={colour6} link1={boxSixLink1} linkHref1={boxSixHref1} link2={boxSixLink2} linkHref2={boxSixHref2} link3={boxSixLink3} linkHref3={boxSixHref3}/>
            <FooterLinksComponent image={image7} imagePosition={imageSevenPosition} title={title7} colour={colour7} link1={boxSevenLink1} linkHref1={boxSevenHref1}/>
            <FooterLinkBoxComponent image={image8} imagePosition={imageEightPosition} title={title8} colour={colour8} link1={boxEightLink1} linkHref1={boxEightHref1}/>
          </div>
        <ToolBoxSectionComponent selectedText={selectedTitle} selectedColour={selectedColour} selectedLink={selectedPdfLink}/>
        
        </div>
      </section>
    );
  }
}

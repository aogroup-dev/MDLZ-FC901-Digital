import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneToggle,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'DigitalPageWebPartWebPartStrings';
import DigitalPageWebPart from './components/DigitalPageWebPart';
import { IDigitalPageWebPartProps } from './components/IDigitalPageWebPartProps';

export interface IDigitalPageWebPartWebPartProps {
  image1: string;
  title1: string;
  colour1: string;
  imageOnePosition: boolean;
  boxOnesubHeading1: string;
  boxOnesubHeading2: string;
  boxOnesubHeading3: string;
  boxOnesubHeading4: string;
  boxOnesubHeading5: string;


  image2: string;
  title2: string;
  colour2: string;
  imageTwoPosition: boolean;
  subHeading: string;
  subHeadingLink: string;
  subHeadingNoIcon: string;
  boxTwosubHeading1: string;
  boxTwosubHeading2: string;
  boxTwosubHeading3: string;
  boxTwosubHeading4: string;
  boxTwosubHeading5: string;

  image3: string;
  title3: string;
  colour3: string;
  imageThreePosition: boolean;
  boxThreesubHeading1: string;
  boxThreesubHeading2: string;
  boxThreesubHeading3: string;
  boxThreesubHeading4: string;
  boxThreesubHeading5: string;

  image4: string;
  title4: string;
  colour4: string;
  imageFourPosition: boolean;
  boxFoursubHeading1: string;
  boxFoursubHeading2: string;
  boxFoursubHeading3: string;
  boxFoursubHeading4: string;
  boxFoursubHeading5: string;

  image5: string;
  title5: string;
  colour5: string;
  imageFivePosition: boolean;
  boxFivesubHeading1: string;
  boxFivesubHeading2: string;
  boxFivesubHeading3: string;
  boxFivesubHeading4: string;
  boxFivesubHeading5: string;

  image6: string;
  title6: string;
  colour6: string;
  imageSixPosition: boolean;
  boxSixsubHeading1: string;
  boxSixsubHeading2: string;
  boxSixsubHeading3: string;
  boxSixsubHeading4: string;
  boxSixsubHeading5: string;

  image7: string;
  title7: string;
  colour7: string;
  imageSevenPosition: boolean;

  image8: string;
  title8: string;
  colour8: string;
  imageEightPosition: boolean;

  boxOneLink1: string;
  boxOneHref1: string;
  boxOneLink2: string;
  boxOneHref2: string;
  boxOneLink3: string;
  boxOneHref3: string;
  boxOneLink4: string;
  boxOneHref4: string;
  boxOneLink5: string;
  boxOneHref5: string;
  
  boxTwoLink1: string;
  boxTwoHref1: string;
  boxTwoLink2: string;
  boxTwoHref2: string;
  boxTwoLink3: string;
  boxTwoHref3: string;
  boxTwoLink4: string;
  boxTwoHref4: string;
  // boxTwoLink5: string;
  // boxTwoHref5: string;

  boxThreeLink1: string;
  boxThreeHref1: string;
  boxThreeLink2: string;
  boxThreeHref2: string;
  boxThreeLink3: string;
  boxThreeHref3: string;
  boxThreeLink4: string;
  boxThreeHref4: string;
  boxThreeLink5: string;
  boxThreeHref5: string;

  boxFourLink1: string;
  boxFourHref1: string;
  boxFourLink2: string;
  boxFourHref2: string;
  boxFourLink3: string;
  boxFourHref3: string;
  boxFourLink4: string;
  boxFourHref4: string;
  boxFourLink5: string;
  boxFourHref5: string;

  boxFiveLink1: string;
  boxFiveHref1: string;
  boxFiveLink2: string;
  boxFiveHref2: string;
  boxFiveLink3: string;
  boxFiveHref3: string;
  boxFiveLink4: string;
  boxFiveHref4: string;
  boxFiveLink5: string;
  boxFiveHref5: string;

  boxSixLink1: string;
  boxSixHref1: string;
  boxSixLink2: string;
  boxSixHref2: string;
  boxSixLink3: string;
  boxSixHref3: string;
  boxSixLink4: string;
  boxSixHref4: string;
  boxSixLink5: string;
  boxSixHref5: string;

  boxSevenLink1: string;
  boxSevenHref1: string;

  boxEightLink1: string;
  boxEightHref1: string;
  
}

export default class DigitalPageWebPartWebPart extends BaseClientSideWebPart<IDigitalPageWebPartWebPartProps> {


  public render(): void {
    const element: React.ReactElement<IDigitalPageWebPartProps> = React.createElement(
      DigitalPageWebPart,
      {
        image1: this.properties.image1,
        title1: this.properties.title1,
        colour1: this.properties.colour1,
        imageOnePosition: this.properties.imageOnePosition,
        boxOnesubHeading1: this.properties.boxOnesubHeading1,
        boxOnesubHeading2: this.properties.boxOnesubHeading2,
        boxOnesubHeading3: this.properties.boxOnesubHeading3,
        boxOnesubHeading4: this.properties.boxOnesubHeading4,
        boxOnesubHeading5: this.properties.boxOnesubHeading5,

        image2: this.properties.image2,
        title2: this.properties.title2,
        colour2: this.properties.colour2,
        imageTwoPosition: this.properties.imageTwoPosition,
        subHeading: this.properties.subHeading,
        subHeadingLink: this.properties.subHeadingLink,
        boxTwosubHeading1: this.properties.boxTwosubHeading1,
        boxTwosubHeading2: this.properties.boxTwosubHeading2,
        boxTwosubHeading3: this.properties.boxTwosubHeading3,
        boxTwosubHeading4: this.properties.boxTwosubHeading4,
        boxTwosubHeading5: this.properties.boxTwosubHeading5,
        subHeadingNoIcon: this.properties.subHeadingNoIcon,


        image3: this.properties.image3,
        title3: this.properties.title3,
        colour3: this.properties.colour3,
        imageThreePosition: this.properties.imageThreePosition,
        boxThreesubHeading1: this.properties.boxThreesubHeading1,
        boxThreesubHeading2: this.properties.boxThreesubHeading2,
        boxThreesubHeading3: this.properties.boxThreesubHeading3,
        boxThreesubHeading4: this.properties.boxThreesubHeading4,
        boxThreesubHeading5: this.properties.boxThreesubHeading5,


        image4: this.properties.image4,
        title4: this.properties.title4,
        colour4: this.properties.colour4,
        imageFourPosition: this.properties.imageFourPosition,
        boxFoursubHeading1: this.properties.boxFoursubHeading1,
        boxFoursubHeading2: this.properties.boxFoursubHeading2,
        boxFoursubHeading3: this.properties.boxFoursubHeading3,
        boxFoursubHeading4: this.properties.boxFoursubHeading4,
        boxFoursubHeading5: this.properties.boxFoursubHeading5,

        image5: this.properties.image5,
        title5: this.properties.title5,
        colour5: this.properties.colour5,
        imageFivePosition: this.properties.imageFivePosition,
        boxFivesubHeading1: this.properties.boxFivesubHeading1,
        boxFivesubHeading2: this.properties.boxFivesubHeading2,
        boxFivesubHeading3: this.properties.boxFivesubHeading3,
        boxFivesubHeading4: this.properties.boxFivesubHeading4,
        boxFivesubHeading5: this.properties.boxFivesubHeading5,

        image6: this.properties.image6,
        title6: this.properties.title6,
        colour6: this.properties.colour6,
        imageSixPosition: this.properties.imageSixPosition,
        boxSixsubHeading1: this.properties.boxSixsubHeading1,
        boxSixsubHeading2: this.properties.boxSixsubHeading2,
        boxSixsubHeading3: this.properties.boxSixsubHeading3,
        boxSixsubHeading4: this.properties.boxSixsubHeading4,
        boxSixsubHeading5: this.properties.boxSixsubHeading5,

        image7: this.properties.image7,
        title7: this.properties.title7,
        colour7: this.properties.colour7,
        imageSevenPosition: this.properties.imageSevenPosition,

        image8: this.properties.image8,
        title8: this.properties.title8,
        colour8: this.properties.colour8,
        imageEightPosition: this.properties.imageEightPosition,

        boxOneLink1: this.properties.boxOneLink1,
        boxOneHref1: this.properties.boxOneHref1,
        boxOneLink2: this.properties.boxOneLink2,
        boxOneHref2: this.properties.boxOneHref2,
        boxOneLink3: this.properties.boxOneLink3,
        boxOneHref3: this.properties.boxOneHref3,
        boxOneLink4: this.properties.boxOneLink4,
        boxOneHref4: this.properties.boxOneHref4,
        boxOneLink5: this.properties.boxOneLink5,
        boxOneHref5: this.properties.boxOneHref5,

        boxTwoLink1: this.properties.boxTwoLink1,
        boxTwoHref1: this.properties.boxTwoHref1,
        boxTwoLink2: this.properties.boxTwoLink2,
        boxTwoHref2: this.properties.boxTwoHref2,
        boxTwoLink3: this.properties.boxTwoLink3,
        boxTwoHref3: this.properties.boxTwoHref3,
        boxTwoLink4: this.properties.boxTwoLink4,
        boxTwoHref4: this.properties.boxTwoHref4,

        boxThreeLink1: this.properties.boxThreeLink1,
        boxThreeHref1: this.properties.boxThreeHref1,
        boxThreeLink2: this.properties.boxThreeLink2,
        boxThreeHref2: this.properties.boxThreeHref2,
        boxThreeLink3: this.properties.boxThreeLink3,
        boxThreeHref3: this.properties.boxThreeHref3,
        boxThreeLink4: this.properties.boxThreeLink4,
        boxThreeHref4: this.properties.boxThreeHref4,
        boxThreeLink5: this.properties.boxThreeLink5,
        boxThreeHref5: this.properties.boxThreeHref5,

        boxFourLink1: this.properties.boxFourLink1,
        boxFourHref1: this.properties.boxFourHref1,
        boxFourLink2: this.properties.boxFourLink2,
        boxFourHref2: this.properties.boxFourHref2,
        boxFourLink3: this.properties.boxFourLink3,
        boxFourHref3: this.properties.boxFourHref3,
        boxFourLink4: this.properties.boxFourLink4,
        boxFourHref4: this.properties.boxFourHref4,
        boxFourLink5: this.properties.boxFourLink5,
        boxFourHref5: this.properties.boxFourHref5,

        boxFiveLink1: this.properties.boxFiveLink1,
        boxFiveHref1: this.properties.boxFiveHref1,
        boxFiveLink2: this.properties.boxFiveLink2,
        boxFiveHref2: this.properties.boxFiveHref2,
        boxFiveLink3: this.properties.boxFiveLink3,
        boxFiveHref3: this.properties.boxFiveHref3,
        boxFiveLink4: this.properties.boxFiveLink4,
        boxFiveHref4: this.properties.boxFiveHref4,
        boxFiveLink5: this.properties.boxFiveLink5,
        boxFiveHref5: this.properties.boxFiveHref5,

        boxSixLink1: this.properties.boxSixLink1,
        boxSixHref1: this.properties.boxSixHref1,
        boxSixLink2: this.properties.boxSixLink2,
        boxSixHref2: this.properties.boxSixHref2,
        boxSixLink3: this.properties.boxSixLink3,
        boxSixHref3: this.properties.boxSixHref3,
        boxSixLink4: this.properties.boxSixLink4,
        boxSixHref4: this.properties.boxSixHref4,
        boxSixLink5: this.properties.boxSixLink5,
        boxSixHref5: this.properties.boxSixHref5,

        boxSevenLink1: this.properties.boxSevenLink1,
        boxSevenHref1: this.properties.boxSevenHref1,

        boxEightLink1: this.properties.boxEightLink1,
        boxEightHref1: this.properties.boxEightHref1,
        
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      // this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              throw new Error('Unknown host');
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    // this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Accordion Section'
          },
          groups: [
            {
              groupName: 'Accordion One',
              groupFields: [
                PropertyPaneTextField('image1', {
                  label: 'image link'
                }),
                PropertyPaneTextField('title1',{
                  label: 'title'
                }),
                PropertyPaneToggle( 'imageOnePosition', {
                  label: 'image Position',
                  onText: 'Top',
                  offText: 'Bottom'
                }),
                PropertyPaneTextField('boxOnesubHeading1',{
                  label: 'sub headings (Press Enter to separate content)',
                  multiline: true,
                }),
                PropertyPaneDropdown('colour1', {
                  label: 'Accordion Colour',
                  options: [
                    {key: '#287819', text: 'green'},
                    {key: '#2d6eaa', text: 'blue'},
                    {key: '#e6af23', text: 'yellow'},
                    {key: '#a52323', text: 'burgundy'},
                    {key: '#623e24', text: 'brown'},
                    {key: '#724d8d', text: 'purple'},
                    {key: '#666666', text: 'grey'},
                    {key: '#e18719', text: 'orange'},
                  ],
                  // selectedKey: 'colour1',
                }),

                PropertyPaneTextField('boxOneLink1', {
                  label: 'link text 1 ',
                  multiline: true,
                }),
                PropertyPaneTextField('boxOneHref1', {
                  label: 'link 1 ',
                  multiline: true
                }),
                PropertyPaneTextField('boxOneLink2', {
                  label: 'link text 2 ',
                  multiline: true
                }),
                PropertyPaneTextField('boxOneHref2', {
                  label: 'link 2 ',
                  multiline: true
                }),
                PropertyPaneTextField('boxOneLink3', {
                  label: 'link text 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxOneHref3', {
                  label: 'link 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxOneLink4', {
                  label: 'link text 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxOneHref4', {
                  label: 'link 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxOneLink5', {
                  label: 'link text 5 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxOneHref5', {
                  label: 'link 5 '
                  ,multiline: true
                }),

                
              ]
            },
            
            ,
          ]
        },
        {
          header: {
            description: 'Accordion Section'
          },
          groups: [
            {
              groupName: 'Accordion Two',
              groupFields: [
                PropertyPaneTextField('image2', {
                  label: 'image link'
                }),
                PropertyPaneTextField('title2',{
                  label: 'title'
                }),
                PropertyPaneToggle( 'imageTwoPosition', {
                  label: 'image Position',
                  onText: 'Top',
                  offText: 'Bottom'
                }),
                PropertyPaneTextField('subHeading',{
                  label: 'sub headings (Press Enter to separate content)',
                  multiline: true,
                }),
                PropertyPaneTextField('subHeadingNoIcon',{
                  label: 'sub heading without icon text'
                }
                ),
                PropertyPaneTextField('subHeadingLink',{
                  label: 'sub heading without icon Link',
                  
                }),
                PropertyPaneDropdown('colour2', {
                  label: 'Accordion colour',
                  options: [
                    {key: '#287819', text: 'green'},
                    {key: '#2d6eaa', text: 'blue'},
                    {key: '#e6af23', text: 'yellow'},
                    {key: '#a52323', text: 'burgundy'},
                    {key: '#623e24', text: 'brown'},
                    {key: '#724d8d', text: 'purple'},
                    {key: '#666666', text: 'grey'},
                    {key: '#e18719', text: 'orange'},
                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxTwoLink1', {
                  label: 'link text 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoHref1', {
                  label: 'link 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoLink2', {
                  label: 'link text 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoHref2', {
                  label: 'link 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoLink3', {
                  label: 'link text 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoHref3', {
                  label: 'link 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoLink4', {
                  label: 'link text 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoHref4', {
                  label: 'link 4 '
                  ,multiline: true
                }),

              
              ]
            }

          ]
          

        },
        {
          header: {
            description: 'Accordion Section'
          },
          groups: [
            {
              groupName: 'Accordion Three',
              groupFields: [
                PropertyPaneTextField('image3', {
                  label: 'image link'
                }),
                PropertyPaneTextField('title3',{
                  label: 'title'
                }),
                PropertyPaneToggle( 'imageThreePosition', {
                  label: 'image Position',
                  onText: 'Top',
                  offText: 'Bottom'
                }),
                PropertyPaneTextField('boxThreesubHeading1',{
                  label: 'sub headings (Press Enter to separate content)',
                  multiline: true
                }),
                PropertyPaneDropdown('colour3', {
                  label: 'Accordion colour',
                  options: [
                    {key: '#287819', text: 'green'},
                    {key: '#2d6eaa', text: 'blue'},
                    {key: '#e6af23', text: 'yellow'},
                    {key: '#a52323', text: 'burgundy'},
                    {key: '#623e24', text: 'brown'},
                    {key: '#724d8d', text: 'purple'},
                    {key: '#666666', text: 'grey'},
                    {key: '#e18719', text: 'orange'},
                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxThreeLink1', {
                  label: 'link text 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeHref1', {
                  label: 'link 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeLink2', {
                  label: 'link text 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeHref2', {
                  label: 'link 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeLink3', {
                  label: 'link text 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeHref3', {
                  label: 'link 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeLink4', {
                  label: 'link text 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeHref4', {
                  label: 'link 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeLink5', {
                  label: 'link text 5 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeHref5', {
                  label: 'link 5 '
                  ,multiline: true
                }),
              
              ]
            }

          ]
        },
        {
          header: {
            description: 'Accordion Section'
          },
          groups: [
            {
              groupName: 'Accordion Four',
              groupFields: [
                PropertyPaneTextField('image4', {
                  label: 'image link'
                }),
                PropertyPaneTextField('title4',{
                  label: 'title'
                }),
                PropertyPaneToggle( 'imageFourPosition', {
                  label: 'image Position',
                  onText: 'Top',
                  offText: 'Bottom'
                }),
                PropertyPaneTextField('boxFoursubHeading1',{
                  label: 'sub headings (Press Enter to separate content)',
                  multiline: true
                }),
                // PropertyPaneTextField('boxFoursubHeading2',{
                //   label: 'sub heading 2'
                // }),
                // PropertyPaneTextField('boxFoursubHeading3',{
                //   label: 'sub heading 3'
                // }),
                PropertyPaneDropdown('colour4', {
                  label: 'Accordion colour',
                  options: [
                    {key: '#287819', text: 'green'},
                    {key: '#2d6eaa', text: 'blue'},
                    {key: '#e6af23', text: 'yellow'},
                    {key: '#a52323', text: 'burgundy'},
                    {key: '#623e24', text: 'brown'},
                    {key: '#724d8d', text: 'purple'},
                    {key: '#666666', text: 'grey'},
                    {key: '#e18719', text: 'orange'},
                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxFourLink1', {
                  label: 'link text 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourHref1', {
                  label: 'link 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourLink2', {
                  label: 'link text 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourHref2', {
                  label: 'link 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourLink3', {
                  label: 'link text 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourHref3', {
                  label: 'link 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourLink4', {
                  label: 'link text 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourHref4', {
                  label: 'link 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourLink5', {
                  label: 'link text 5 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourHref5', {
                  label: 'link 5 '
                  ,multiline: true
                }),
                
              
              ]
            }
          ]
        },
        {
          header: {
            description: 'Footer section Accordion'
          },
          groups: [
            {
              groupName: 'Accordion Five',
              groupFields: [
                PropertyPaneTextField('image5', {
                  label: 'image link'
                }),
                PropertyPaneTextField('title5',{
                  label: 'title'
                }),
                PropertyPaneToggle( 'imageFivePosition', {
                  label: 'image Position',
                  onText: 'Top',
                  offText: 'Bottom'
                }),
                PropertyPaneTextField('boxFivesubHeading1',{
                  label: 'sub headings (Press Enter to separate content)',
                  multiline: true
                }),
                PropertyPaneDropdown('colour5', {
                  label: 'Accordion colour',
                  options: [
                    {key: '#287819', text: 'green'},
                    {key: '#2d6eaa', text: 'blue'},
                    {key: '#e6af23', text: 'yellow'},
                    {key: '#a52323', text: 'burgundy'},
                    {key: '#623e24', text: 'brown'},
                    {key: '#724d8d', text: 'purple'},
                    {key: '#666666', text: 'grey'},
                    {key: '#e18719', text: 'orange'},

                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxFiveLink1', {
                  label: 'link text 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveHref1', {
                  label: 'link 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveLink2', {
                  label: 'link text 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveHref2', {
                  label: 'link 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveLink3', {
                  label: 'link text 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveHref3', {
                  label: 'link 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveLink4', {
                  label: 'link text 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveHref4', {
                  label: 'link 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveLink5', {
                  label: 'link text 5 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveHref5', {
                  label: 'link 5 '
                  ,multiline: true
                }),
              
              ]
            },
            
          ]
        },
        {
          header: {
            description: 'Footer section accordion'
          },
          groups: [
            {
              groupName: 'Accordion Six',
              groupFields: [
                PropertyPaneTextField('image6', {
                  label: 'image link'
                }),
                PropertyPaneTextField('title6',{
                  label: 'title'
                }),
                PropertyPaneToggle( 'imageSixPosition', {
                  label: 'image Position',
                  onText: 'Top',
                  offText: 'Bottom'
                }),
                PropertyPaneTextField('boxSixsubHeading1',{
                  label: 'sub headings (Press Enter to separate content)',
                  multiline:true
                }),
                PropertyPaneDropdown('colour6', {
                  label: 'Accordion colour',
                  options: [
                    {key: '#287819', text: 'green'},
                    {key: '#2d6eaa', text: 'blue'},
                    {key: '#e6af23', text: 'yellow'},
                    {key: '#a52323', text: 'burgundy'},
                    {key: '#623e24', text: 'brown'},
                    {key: '#724d8d', text: 'purple'},
                    {key: '#666666', text: 'grey'},
                    {key: '#e18719', text: 'orange'},

                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxSixLink1', {
                  label: 'link text 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixHref1', {
                  label: 'link 1 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixLink2', {
                  label: 'link text 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixHref2', {
                  label: 'link 2 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixLink3', {
                  label: 'link text 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixHref3', {
                  label: 'link 3 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixLink4', {
                  label: 'link text 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixHref4', {
                  label: 'link 4 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixLink5', {
                  label: 'link text 5 '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixHref5', {
                  label: 'link 5 '
                  ,multiline: true
                }),
              
              ]
            }
          ]


        },
        {
          header: {
            description: 'Links box section'
          },
          groups: [
            {
              groupName: 'links box one',
              groupFields: [
                PropertyPaneTextField('image7', {
                  label: 'image link'
                }),
                PropertyPaneTextField('title7',{
                  label: 'title'
                }),
                PropertyPaneToggle( 'imageSevenPosition', {
                  label: 'image Position',
                  onText: 'Top',
                  offText: 'Bottom'
                }),
                PropertyPaneDropdown('colour7', {
                  label: 'box colour',
                  options: [
                    {key: '#287819', text: 'green'},
                    {key: '#2d6eaa', text: 'blue'},
                    {key: '#e6af23', text: 'yellow'},
                    {key: '#a52323', text: 'burgundy'},
                    {key: '#623e24', text: 'brown'},
                    {key: '#724d8d', text: 'purple'},
                    {key: '#666666', text: 'grey'},
                    {key: '#e18719', text: 'orange'},

                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxSevenLink1', {
                  label: 'links text (Press Enter to separate content)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSevenHref1', {
                  label: 'links (Press Enter to separate content)'
                  ,multiline: true
                }),
              
              ]
            }
          ]
        },
        {
          header: {
            description: 'footer section links'
          },
          groups: [
            {
              groupName: 'links box Two',
              groupFields: [
                PropertyPaneTextField('image8', {
                  label: 'image link'
                }),
                PropertyPaneTextField('title8',{
                  label: 'title'
                }),
                PropertyPaneToggle( 'imageEightPosition', {
                  label: 'image Position',
                  onText: 'Top',
                  offText: 'Bottom'
                }),
                PropertyPaneDropdown('colour8', {
                  label: 'colour',
                  options: [
                    {key: '#287819', text: 'green'},
                    {key: '#2d6eaa', text: 'blue'},
                    {key: '#e6af23', text: 'yellow'},
                    {key: '#a52323', text: 'burgundy'},
                    {key: '#623e24', text: 'brown'},
                    {key: '#724d8d', text: 'purple'},
                    {key: '#666666', text: 'grey'},
                    {key: '#e18719', text: 'orange'},

                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxEightLink1', {
                  label: 'links text (Press Enter to separate content) '
                  ,multiline: true
                }),
                PropertyPaneTextField('boxEightHref1', {
                  label: 'links (Press Enter to separate content)'
                  ,multiline: true
                }),
              
              ]
            }
          ]
        },
        
      ]
    };
  }
}

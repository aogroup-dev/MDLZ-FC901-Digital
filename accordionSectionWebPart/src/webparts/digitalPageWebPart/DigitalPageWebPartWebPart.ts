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
  test: string;
  imageOnePosition: boolean;

  image2: string;
  title2: string;
  colour2: string;
  imageTwoPosition: boolean;

  image3: string;
  title3: string;
  colour3: string;
  imageThreePosition: boolean;

  image4: string;
  title4: string;
  colour4: string;
  imageFourPosition: boolean;

  image5: string;
  title5: string;
  colour5: string;
  imageFivePosition: boolean;

  image6: string;
  title6: string;
  colour6: string;
  imageSixPosition: boolean;

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
  
  boxTwoLink1: string;
  boxTwoHref1: string;
  boxTwoLink2: string;
  boxTwoHref2: string;
  boxTwoLink3: string;
  boxTwoHref3: string;
  boxTwoLink4: string;
  boxTwoHref4: string;

  boxThreeLink1: string;
  boxThreeHref1: string;
  boxThreeLink2: string;
  boxThreeHref2: string;
  boxThreeLink3: string;
  boxThreeHref3: string;
  boxThreeLink4: string;
  boxThreeHref4: string;

  boxFourLink1: string;
  boxFourHref1: string;
  boxFourLink2: string;
  boxFourHref2: string;
  boxFourLink3: string;
  boxFourHref3: string;

  boxFiveLink1: string;
  boxFiveHref1: string;
  boxFiveLink2: string;
  boxFiveHref2: string;
  boxFiveLink3: string;
  boxFiveHref3: string;
  boxFiveLink4: string;
  boxFiveHref4: string;

  boxSixLink1: string;
  boxSixHref1: string;
  boxSixLink2: string;
  boxSixHref2: string;
  boxSixLink3: string;
  boxSixHref3: string;

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
        test: this.properties.test,
        imageOnePosition: this.properties.imageOnePosition,

        image2: this.properties.image2,
        title2: this.properties.title2,
        colour2: this.properties.colour2,
        imageTwoPosition: this.properties.imageTwoPosition,

        image3: this.properties.image3,
        title3: this.properties.title3,
        colour3: this.properties.colour3,
        imageThreePosition: this.properties.imageThreePosition,

        image4: this.properties.image4,
        title4: this.properties.title4,
        colour4: this.properties.colour4,
        imageFourPosition: this.properties.imageFourPosition,

        image5: this.properties.image5,
        title5: this.properties.title5,
        colour5: this.properties.colour5,
        imageFivePosition: this.properties.imageFivePosition,

        image6: this.properties.image6,
        title6: this.properties.title6,
        colour6: this.properties.colour6,
        imageSixPosition: this.properties.imageSixPosition,

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

        boxFourLink1: this.properties.boxFourLink1,
        boxFourHref1: this.properties.boxFourHref1,
        boxFourLink2: this.properties.boxFourLink2,
        boxFourHref2: this.properties.boxFourHref2,
        boxFourLink3: this.properties.boxFourLink3,
        boxFourHref3: this.properties.boxFourHref3,

        boxFiveLink1: this.properties.boxFiveLink1,
        boxFiveHref1: this.properties.boxFiveHref1,
        boxFiveLink2: this.properties.boxFiveLink2,
        boxFiveHref2: this.properties.boxFiveHref2,
        boxFiveLink3: this.properties.boxFiveLink3,
        boxFiveHref3: this.properties.boxFiveHref3,
        boxFiveLink4: this.properties.boxFiveLink4,
        boxFiveHref4: this.properties.boxFiveHref4,

        boxSixLink1: this.properties.boxSixLink1,
        boxSixHref1: this.properties.boxSixHref1,
        boxSixLink2: this.properties.boxSixLink2,
        boxSixHref2: this.properties.boxSixHref2,
        boxSixLink3: this.properties.boxSixLink3,
        boxSixHref3: this.properties.boxSixHref3,

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
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'box 1',
              groupFields: [
                PropertyPaneTextField('image1', {
                  label: 'image link'
                }),
                PropertyPaneTextField('title1',{
                  label: 'title'
                }),
                PropertyPaneTextField('test',{
                  label: 'sub heading'
                }),
                PropertyPaneToggle( 'imageOnePosition', {
                  label: 'image Position',
                  onText: 'Top',
                  offText: 'Bottom'
                }),
                PropertyPaneDropdown('colour1', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'},
                    {key: '#623e24', text: 'colour 5'},
                    {key: '#724d8d', text: 'colour 6'},
                    {key: '#666666', text: 'colour 7'},
                    {key: '#e18719', text: 'colour 8'},
                  ],
                  // selectedKey: 'colour1',
                }),

                PropertyPaneTextField('boxOneLink1', {
                  label: 'link 1 (Use "~" to separate links)',
                  multiline: true,
                }),
                PropertyPaneTextField('boxOneHref1', {
                  label: 'Href 1 (Use "~" to separate links)',
                  multiline: true
                }),
                PropertyPaneTextField('boxOneLink2', {
                  label: 'link 2 (Use "~" to separate links)',
                  multiline: true
                }),
                PropertyPaneTextField('boxOneHref2', {
                  label: 'Href 2 (Use "~" to separate links)',
                  multiline: true
                }),
                PropertyPaneTextField('boxOneLink3', {
                  label: 'link 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxOneHref3', {
                  label: 'Href 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                
              ]
            },
            {
              groupName: 'box 2',
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
                PropertyPaneDropdown('colour2', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'},
                    {key: '#623e24', text: 'colour 5'},
                    {key: '#724d8d', text: 'colour 6'},
                    {key: '#666666', text: 'colour 7'},
                    {key: '#e18719', text: 'colour 8'},
                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxTwoLink1', {
                  label: 'link 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoHref1', {
                  label: 'Href 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoLink2', {
                  label: 'link 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoHref2', {
                  label: 'Href 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoLink3', {
                  label: 'link 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoHref3', {
                  label: 'Href 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoLink4', {
                  label: 'link 4 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxTwoHref4', {
                  label: 'Href 4 (Use "~" to separate links)'
                  ,multiline: true
                }),

              
              ]
            },
            {
              groupName: 'box 3',
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
                PropertyPaneDropdown('colour3', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'},
                    {key: '#623e24', text: 'colour 5'},
                    {key: '#724d8d', text: 'colour 6'},
                    {key: '#666666', text: 'colour 7'},
                    {key: '#e18719', text: 'colour 8'},
                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxThreeLink1', {
                  label: 'link 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeHref1', {
                  label: 'Href 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeLink2', {
                  label: 'link 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeHref2', {
                  label: 'Href 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeLink3', {
                  label: 'link 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeHref3', {
                  label: 'Href 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeLink4', {
                  label: 'link 4 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxThreeHref4', {
                  label: 'Href 4 (Use "~" to separate links)'
                  ,multiline: true
                }),
              
              ]
            },
            {
              groupName: 'box 4',
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
                PropertyPaneDropdown('colour4', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'},
                    {key: '#623e24', text: 'colour 5'},
                    {key: '#724d8d', text: 'colour 6'},
                    {key: '#666666', text: 'colour 7'},
                    {key: '#e18719', text: 'colour 8'},
                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxFourLink1', {
                  label: 'link 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourHref1', {
                  label: 'Href 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourLink2', {
                  label: 'link 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourHref2', {
                  label: 'Href 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourLink3', {
                  label: 'link 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFourHref3', {
                  label: 'Href 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                
              
              ]
            },
            {
              groupName: 'box 5',
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
                PropertyPaneDropdown('colour5', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'},
                    {key: '#623e24', text: 'colour 5'},
                    {key: '#724d8d', text: 'colour 6'},
                    {key: '#666666', text: 'colour 7'},
                    {key: '#e18719', text: 'colour 8'},

                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxFiveLink1', {
                  label: 'link 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveHref1', {
                  label: 'Href 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveLink2', {
                  label: 'link 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveHref2', {
                  label: 'Href 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveLink3', {
                  label: 'link 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveHref3', {
                  label: 'Href 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveLink4', {
                  label: 'link 4 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxFiveHref4', {
                  label: 'Href 4 (Use "~" to separate links)'
                  ,multiline: true
                }),
              
              ]
            },
            {
              groupName: 'box 6',
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
                PropertyPaneDropdown('colour6', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'},
                    {key: '#623e24', text: 'colour 5'},
                    {key: '#724d8d', text: 'colour 6'},
                    {key: '#666666', text: 'colour 7'},
                    {key: '#e18719', text: 'colour 8'},

                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxSixLink1', {
                  label: 'link 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixHref1', {
                  label: 'Href 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixLink2', {
                  label: 'link 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixHref2', {
                  label: 'Href 2 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixLink3', {
                  label: 'link 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSixHref3', {
                  label: 'Href 3 (Use "~" to separate links)'
                  ,multiline: true
                }),
              
              ]
            },
            {
              groupName: 'box 7',
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
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'},
                    {key: '#623e24', text: 'colour 5'},
                    {key: '#724d8d', text: 'colour 6'},
                    {key: '#666666', text: 'colour 7'},
                    {key: '#e18719', text: 'colour 8'},

                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxSevenLink1', {
                  label: 'link 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxSevenHref1', {
                  label: 'Href 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
              
              ]
            },
            {
              groupName: 'box 8',
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
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'},
                    {key: '#623e24', text: 'colour 5'},
                    {key: '#724d8d', text: 'colour 6'},
                    {key: '#666666', text: 'colour 7'},
                    {key: '#e18719', text: 'colour 8'},

                  ],
                  // selectedKey: 'colour1',
                }),
                PropertyPaneTextField('boxEightLink1', {
                  label: 'link 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
                PropertyPaneTextField('boxEightHref1', {
                  label: 'Href 1 (Use "~" to separate links)'
                  ,multiline: true
                }),
              
              ]
            },
            
            
            

            

          ]
        },
        
      ]
    };
  }
}

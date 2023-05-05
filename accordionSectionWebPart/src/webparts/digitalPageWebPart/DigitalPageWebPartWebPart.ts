import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
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
  image2: string;
  title2: string;
  colour2: string;
  image3: string;
  title3: string;
  colour3: string;
  image4: string;
  title4: string;
  colour4: string;
}

export default class DigitalPageWebPartWebPart extends BaseClientSideWebPart<IDigitalPageWebPartWebPartProps> {


  public render(): void {
    const element: React.ReactElement<IDigitalPageWebPartProps> = React.createElement(
      DigitalPageWebPart,
      {
        image1: this.properties.image1,
        title1: this.properties.title1,
        colour1: this.properties.colour1,
        image2: this.properties.image2,
        title2: this.properties.title2,
        colour2: this.properties.colour2,
        image3: this.properties.image3,
        title3: this.properties.title3,
        colour3: this.properties.colour3,
        image4: this.properties.image4,
        title4: this.properties.title4,
        colour4: this.properties.colour4,
        
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
                PropertyPaneDropdown('colour1', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'}
                  ],
                  // selectedKey: 'colour1',
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
                PropertyPaneDropdown('colour2', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'}
                  ],
                  // selectedKey: 'colour1',
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
                PropertyPaneDropdown('colour3', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'}
                  ],
                  // selectedKey: 'colour1',
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
                PropertyPaneDropdown('colour4', {
                  label: 'heading colour',
                  options: [
                    {key: '#287819', text: 'colour 1'},
                    {key: '#2d6eaa', text: 'colour 2'},
                    {key: '#e6af23', text: 'colour 3'},
                    {key: '#a52323', text: 'colour 4'}
                  ],
                  // selectedKey: 'colour1',
                }),
              
              ]
            },

            

          ]
        }
      ]
    };
  }
}

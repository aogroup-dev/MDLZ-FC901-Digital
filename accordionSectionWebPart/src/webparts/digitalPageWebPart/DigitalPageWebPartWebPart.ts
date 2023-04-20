import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'DigitalPageWebPartWebPartStrings';
import DigitalPageWebPart from './components/DigitalPageWebPart';
import { IDigitalPageWebPartProps } from './components/IDigitalPageWebPartProps';

export interface IDigitalPageWebPartWebPartProps {
  title: string;
  subTitle: string;
}

export default class DigitalPageWebPartWebPart extends BaseClientSideWebPart<IDigitalPageWebPartWebPartProps> {


  public render(): void {
    const element: React.ReactElement<IDigitalPageWebPartProps> = React.createElement(
      DigitalPageWebPart,
      {
        title: this.properties.title,
        subTitle: this.properties.subTitle,
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
              groupName: 'purpose',
              groupFields: [
                PropertyPaneTextField('title', {
                  label: 'title'
                }),
                PropertyPaneTextField('subTitle',{
                  label: 'sub-title 1'
                }),
                PropertyPaneTextField('link1', {
                  label: 'link href #'
                }),
                PropertyPaneTextField('link2', {
                  label: 'link href #'
                }),
                
              ]
            },
              {
              groupName: 'capabilities',
              groupFields: [
                PropertyPaneTextField('title2', {
                  label: 'title 2'
                }),
                PropertyPaneTextField('sub-title2',{
                  label: 'sub-title 2'
                })
              ]
            },
            {
              groupName: 'workstreams',
              groupFields: [
                PropertyPaneTextField('title3', {
                  label: 'title 3'
                }),
                PropertyPaneTextField('sub-title3',{
                  label: 'sub-title 3'
                })
              ]
            },
            {
              groupName: 'people',
              groupFields: [
                PropertyPaneTextField('title4', {
                  label: 'title 4'
                }),
                PropertyPaneTextField('sub-title4',{
                  label: 'sub-title 4'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

import * as React from 'react';
import styles from './DigitalRnDBanner.module.scss';
import { IDigitalRnDBannerProps } from './IDigitalRnDBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';

// import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";

export default class DigitalRnDBanner extends React.Component<IDigitalRnDBannerProps, {}> {
  public render(): React.ReactElement<IDigitalRnDBannerProps> {
    const {
      bannerLogo,
      bannerBG,
      bannerDesc,
    } = this.props;

    // const siteUrl =
    //   "https://collaboration.mdlz.com/sites/MondelezUSteamportal/";

    // sp.setup({
    //   sp: {
    //     baseUrl: siteUrl,
    //   },
    // });

    // sp.web.lists
    //   .getByTitle("Pages")
    //   .items.select("Id", "Title", "LinkFilename", "PublishingPageContent", "PublishingPageLayout", "News_x0020_Type", "Created")
    //   .orderBy("Created", false)
    //   .filter("News_x0020_Type eq 'Allocations' and (Created gt '2022-01-01' and Created lt '2023-01-01')")
    //   .get()
    //   .then((items: any[]) => {
    //     console.log(items);
    //   })
    //   .catch((error: any) => {
    //     console.log("Error retrieving items from list:", error);
    //   });

    return (
      <section>
        <div className={styles.banner} style={{backgroundImage: `url(${bannerBG})`}}>
          <div>
            <img src={bannerLogo} alt="Digital R&D" />
            <p>
              {escape(bannerDesc)}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

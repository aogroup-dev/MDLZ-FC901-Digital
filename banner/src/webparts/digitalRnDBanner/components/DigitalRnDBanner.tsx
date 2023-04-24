import * as React from 'react';
import styles from './DigitalRnDBanner.module.scss';
import { IDigitalRnDBannerProps } from './IDigitalRnDBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class DigitalRnDBanner extends React.Component<IDigitalRnDBannerProps, {}> {
  public render(): React.ReactElement<IDigitalRnDBannerProps> {
    const {
      bannerLogo,
      bannerBG,
      bannerDesc,
    } = this.props;

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

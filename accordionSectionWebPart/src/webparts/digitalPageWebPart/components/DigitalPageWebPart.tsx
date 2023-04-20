import * as React from 'react';
// import styles from './DigitalPageWebPart.module.scss';
import { IDigitalPageWebPartProps } from './IDigitalPageWebPartProps';
import AccordionSection from './AccordionComponent';

export default class DigitalPageWebPart extends React.Component<IDigitalPageWebPartProps, {}> {
  public render(): React.ReactElement<IDigitalPageWebPartProps> {
    const {
      title,
      subTitle,
 } = this.props;

    return (
      <section>
        <div>
          {/* <h1>{subTitle}</h1> */}
          <AccordionSection title={title} subTitle={subTitle}/>
          {/* <AccordionSection title={title}/> */}

        </div>
      </section>
    );
  }
}

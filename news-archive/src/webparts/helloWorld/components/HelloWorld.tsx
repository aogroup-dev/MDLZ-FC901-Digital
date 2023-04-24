import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {

    return (
      <section className={styles.allNews}>
        <h2>All News</h2>
        <ul>
          <li>
            <label htmlFor="news_head">HEADLINES</label>
            <input type="radio" name="news_acc" id="news_head" />
            <div className={styles.listData}>
              <div className={styles.filters}>
                <span>Filter by year</span>
                <hr />
                <ul className={styles.listNews}>
                  <li>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                  </li>
                </ul>
                <div className={styles.pagination}>
                  <ul>
                    <li><a className={styles.active} href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <label htmlFor="news_all">ALLOCATIONS</label>
            <input type="radio" name="news_acc" id="news_all" />
            <div className={styles.listData}>
              <div className="filters">
                <span>Filter by year</span>
                <hr />
                <ul className={styles.listNews}>
                  <li>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                  </li>
                </ul>
                <div className={styles.pagination}>
                  <ul>
                    <li><a className={styles.active} href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <label htmlFor="news_dsd">DSD Retail</label>
            <input type="radio" name="news_acc" id="news_dsd" />
            <div className={styles.listData}>
              <div className="filters">
                <span>Filter by year</span>
                <hr />
                <ul className={styles.listNews}>
                  <li>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                  </li>
                </ul>
                <div className={styles.pagination}>
                  <ul>
                    <li><a className={styles.active} href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <label htmlFor="news_info">Informational</label>
            <input type="radio" name="news_acc" id="news_info" />
            <div className={styles.listData}>
              <div className="filters">
                <span>Filter by year</span>
                <hr />
                <ul className={styles.listNews}>
                  <li>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                    <a href="#">Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;</a>
                  </li>
                </ul>
                <div className={styles.pagination}>
                  <ul>
                    <li><a className={styles.active} href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

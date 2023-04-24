import * as React from "react";
import { SPFI } from "@pnp/sp";

import styles from "./HelloWorld.module.scss";
import { IHelloWorldProps } from "./IHelloWorldProps";
import { getSP } from "../pnpjsConfig";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  private _sp: SPFI;

  constructor(props: any) {
    super(props);
    this._sp = getSP();
  }

  public componentDidMount(): void {
    this.getListByTilte();
  }

  public getListByTilte = async () => {
    const list = await this._sp.web.lists
      .getByTitle("Pages")
      .items.select("Id", "Title", "Business")();

    console.log(list);
  };

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
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                  </li>
                </ul>
                <div className={styles.pagination}>
                  <ul>
                    <li>
                      <a className={styles.active} href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
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
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                  </li>
                </ul>
                <div className={styles.pagination}>
                  <ul>
                    <li>
                      <a className={styles.active} href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
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
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                  </li>
                </ul>
                <div className={styles.pagination}>
                  <ul>
                    <li>
                      <a className={styles.active} href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
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
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                    <a href="#">
                      Lorem ipsum dolorconsectetuer adipiscing sit amet &gt;
                    </a>
                  </li>
                </ul>
                <div className={styles.pagination}>
                  <ul>
                    <li>
                      <a className={styles.active} href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
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

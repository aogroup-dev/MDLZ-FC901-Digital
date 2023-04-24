var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './HelloWorld.module.scss';
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.render = function () {
        return (React.createElement("section", { className: styles.allNews },
            React.createElement("h2", null, "All News"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("label", { htmlFor: "news_head" }, "HEADLINES"),
                    React.createElement("input", { type: "radio", name: "news_acc", id: "news_head" }),
                    React.createElement("div", { className: styles.listData },
                        React.createElement("div", { className: styles.filters },
                            React.createElement("span", null, "Filter by year"),
                            React.createElement("hr", null),
                            React.createElement("ul", { className: styles.listNews },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"))),
                            React.createElement("div", { className: styles.pagination },
                                React.createElement("ul", null,
                                    React.createElement("li", null,
                                        React.createElement("a", { className: styles.active, href: "#" }, "1")),
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, "2")),
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, "3"))))))),
                React.createElement("li", null,
                    React.createElement("label", { htmlFor: "news_all" }, "ALLOCATIONS"),
                    React.createElement("input", { type: "radio", name: "news_acc", id: "news_all" }),
                    React.createElement("div", { className: styles.listData },
                        React.createElement("div", { className: "filters" },
                            React.createElement("span", null, "Filter by year"),
                            React.createElement("hr", null),
                            React.createElement("ul", { className: styles.listNews },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"))),
                            React.createElement("div", { className: styles.pagination },
                                React.createElement("ul", null,
                                    React.createElement("li", null,
                                        React.createElement("a", { className: styles.active, href: "#" }, "1")),
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, "2")),
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, "3"))))))),
                React.createElement("li", null,
                    React.createElement("label", { htmlFor: "news_dsd" }, "DSD Retail"),
                    React.createElement("input", { type: "radio", name: "news_acc", id: "news_dsd" }),
                    React.createElement("div", { className: styles.listData },
                        React.createElement("div", { className: "filters" },
                            React.createElement("span", null, "Filter by year"),
                            React.createElement("hr", null),
                            React.createElement("ul", { className: styles.listNews },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"))),
                            React.createElement("div", { className: styles.pagination },
                                React.createElement("ul", null,
                                    React.createElement("li", null,
                                        React.createElement("a", { className: styles.active, href: "#" }, "1")),
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, "2")),
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, "3"))))))),
                React.createElement("li", null,
                    React.createElement("label", { htmlFor: "news_info" }, "Informational"),
                    React.createElement("input", { type: "radio", name: "news_acc", id: "news_info" }),
                    React.createElement("div", { className: styles.listData },
                        React.createElement("div", { className: "filters" },
                            React.createElement("span", null, "Filter by year"),
                            React.createElement("hr", null),
                            React.createElement("ul", { className: styles.listNews },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"),
                                    React.createElement("a", { href: "#" }, "Lorem ipsum dolorconsectetuer adipiscing sit amet >"))),
                            React.createElement("div", { className: styles.pagination },
                                React.createElement("ul", null,
                                    React.createElement("li", null,
                                        React.createElement("a", { className: styles.active, href: "#" }, "1")),
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, "2")),
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, "3"))))))))));
    };
    return HelloWorld;
}(React.Component));
export default HelloWorld;
//# sourceMappingURL=HelloWorld.js.map
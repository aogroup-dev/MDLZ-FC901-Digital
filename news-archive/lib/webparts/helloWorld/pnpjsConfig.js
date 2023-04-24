// import pnp and pnp logging system
import { spfi, SPFx } from "@pnp/sp";
import { PnPLogging } from "@pnp/logging";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";
var _sp = null;
export var getSP = function (context) {
    if (_sp === null && context != null) {
        // You must add the @pnp/logging package to include the PnPLogging behaviour it is no
        // The LogLevel set's at what level a message will be written to the console
        _sp = spfi().using(SPFx(context)).using(PnPLogging(2 /* Warning */));
    }
    return _sp;
};
//# sourceMappingURL=pnpjsConfig.js.map
import { __decorate } from './node_modules/tslib/tslib.es6.js';
import './node_modules/@lit/reactive-element/reactive-element.js';
import { html as y } from './node_modules/lit-html/lit-html.js';
import { LitElement as s } from './node_modules/lit-element/lit-element.js';
import { query as i } from './node_modules/@lit/reactive-element/decorators/query.js';
import './node_modules/@lit/reactive-element/decorators/query-assigned-elements.js';
import './node_modules/@material/mwc-textfield/mwc-textfield.js';
import { newOpenEvent } from './node_modules/@openscd/open-scd-core/foundation/open-event.js';

class OscdOpen extends s {
    async run() {
        this.input.click();
    }
    async openDoc(event) {
        var _a, _b;
        const file = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b.item(0);
        if (!file)
            return;
        const text = await file.text();
        const docName = file.name;
        const doc = new DOMParser().parseFromString(text, 'application/xml');
        this.dispatchEvent(newOpenEvent(doc, docName));
        this.input.onchange = null;
    }
    render() {
        return y `${y `<mwc-textfield label="open" value="some"></mwc-textfield>`
            }
      <input
        @click=${({ target }) => {
            // eslint-disable-next-line no-param-reassign
            target.value = '';
        }}
        @change=${this.openDoc}
        type="file"
      /> `;
    }
}
__decorate([
    i('input')
], OscdOpen.prototype, "input", void 0);

export { OscdOpen as default };
//# sourceMappingURL=oscd-open.js.map

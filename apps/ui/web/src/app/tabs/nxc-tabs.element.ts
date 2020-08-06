import './nxc-tabs.element.scss';

let styles = `
<style>
#panels {
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  background: white;
  border-radius: 3px;
  padding: 16px;
  height: 250px;
  overflow: auto;
}
#tabs {
  display: inline-flex;
  -webkit-user-select: none;
  user-select: none;
}
#tabs slot {
  display: inline-flex; /* Safari bug. Treats <slot> as a parent */
}
/* Safari does not support #id prefixes on ::slotted
   See https://bugs.webkit.org/show_bug.cgi?id=160538 */
#tabs ::slotted(*) {
  font: 400 16px/22px 'Roboto';
  padding: 16px 8px;
  margin: 0;
  text-align: center;
  width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background: linear-gradient(#fafafa, #eee);
  border: none; /* if the user users a <button> */
}
#tabs ::slotted([aria-selected='true']) {
  font-weight: 600;
  background: white;
  box-shadow: none;
}
#tabs ::slotted(:focus) {
  z-index: 1; /* make sure focus ring doesn't get buried */
}
#panels ::slotted([aria-hidden='true']) {
  display: none;
}
</style>
`;
let template = `
<div id="tabs">
  <slot id="tabsSlot" name="title"></slot>
</div>
<div id="panels">
  <slot id="panelsSlot"></slot>
</div>
`;

// let _selected = null;
type NodeAs<E> = Node & E;

function getAs<E>(nodeOrElement: any) {
  return nodeOrElement as E
}

customElements.define(
  'nxc-tabs',
  class NxcTabsElement extends HTMLElement {
    constructor() {
      super();
      const dom = this.attachShadow({ mode: 'open' });
      dom.innerHTML = styles + template;
    }

    public tabs: HTMLSlotElement[];
    public panels = [];

    private _selected = null;
    get selected() {
      return this._selected;
    }

    set selected(idx) {
      this._selected = idx;
      this._selectTab(idx);

      this.setAttribute('selected', idx);
    }

    _selectTab(idx = null) {
      for (let i = 0, tab; (tab = this.tabs[i]); ++i) {
        let select = i === idx;
        tab.setAttribute('tabindex', select ? 0 : -1);
        tab.setAttribute('aria-selected', select);
        this.panels[i].setAttribute('aria-hidden', !select);
      }
    }

    _findFirstSelectedTab() {
      let selectedIdx: number;
      for (let [i, tab] of this.tabs.entries()) {
        tab.setAttribute('role', 'tab');
        if (tab.hasAttribute('selected')) {
          selectedIdx = i;
        }
      }
      return selectedIdx;
    }

    connectedCallback() {
      this.setAttribute('role', 'tablist');

      const tabsSlot = this.shadowRoot.querySelector<HTMLSlotElement>(
        '#tabsSlot'
      );
      const panelsSlot = this.shadowRoot.querySelector<HTMLSlotElement>(
        '#panelsSlot'
      );

      this.tabs = getAs<HTMLSlotElement[]>(tabsSlot.assignedNodes({ flatten: true }));
      this.panels = panelsSlot.assignedNodes({ flatten: true }).filter((el) => {
        // return el.nodeName === 'SECTION';
        return el.nodeType === Node.ELEMENT_NODE;
      });
      Array.from(this.panels.entries()).forEach(([i, panel]) => {
        console.log(i, panel);
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('tabindex', 0);
      });

      const _boundOnTitleClick = this._onTitleClick.bind(this);
      const _boundOnKeyDown = this._onKeyDown.bind(this);

      tabsSlot.addEventListener('click', _boundOnTitleClick);
      tabsSlot.addEventListener('keydown', _boundOnKeyDown);

      this.selected = this._findFirstSelectedTab() || 0;
    }

    _onTitleClick(e) {
      if (e.target.slot === 'title') {
        this.selected = this.tabs.indexOf(e.target);
        e.target.focus();
      }
    }
    _onKeyDown(e) {
      let idx;
      switch (e.code) {
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          idx = this.selected - 1;
          idx = idx < 0 ? this.tabs.length - 1 : idx;
          this.tabs[idx].click();
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          idx = this.selected + 1;
          this.tabs[idx % this.tabs.length].click();
          break;
        default:
          break;
      }
    }
  }
);

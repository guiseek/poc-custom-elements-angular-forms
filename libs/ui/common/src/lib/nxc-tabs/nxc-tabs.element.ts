import { ElementConstructor, EventWithTarget } from '@nxc/ui/core';
import { getAs } from '../util/element.utils';

export class NxcTabsElement extends HTMLElement {
  static styles = '';
  static template = '';

  constructor() {
    super();
    const dom = this.attachShadow({ mode: 'open' });
    dom.innerHTML = NxcTabsElement.styles + NxcTabsElement.template;
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
      console.log(tab);
      
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

    const tabsSlot = this.shadowRoot
      .querySelector<HTMLSlotElement>('#tabsSlot');

    const panelsSlot = this.shadowRoot
      .querySelector<HTMLSlotElement>('#panelsSlot');

    
    this.tabs = getAs<HTMLSlotElement[]>(tabsSlot.assignedNodes({ flatten: true }));

    this.panels = panelsSlot.assignedNodes({ flatten: true }).filter((el) => {
      return el.nodeType === Node.ELEMENT_NODE;
    });

    Array.from(this.panels.entries()).forEach(([i, panel]) => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', 0);
    });


    const _boundOnTitleClick = this._onTitleClick.bind(this);
    const _boundOnKeyDown = this._onKeyDown.bind(this);

    tabsSlot.addEventListener('click', _boundOnTitleClick);
    tabsSlot.addEventListener('keydown', _boundOnKeyDown);

    this.selected = this._findFirstSelectedTab() || 0;
  }

  _onTitleClick(e: EventWithTarget<HTMLSlotElement>) {
    if (e.target.slot === 'title') {
      this.selected = this.tabs.indexOf(e.target);
      e.target.focus();
    }
  }
  _onKeyDown(e: KeyboardEvent) {
    let idx: number;

    switch (e.code) {
      case 'ArrowUp':
      case 'ArrowLeft': {

        e.preventDefault();
        idx = this.selected - 1;
        idx = idx < 0 ? this.tabs.length - 1 : idx;
        this.tabs[idx].click();
        break;
      }

      case 'ArrowDown':
      case 'ArrowRight': {

        e.preventDefault();
        idx = this.selected + 1;
        this.tabs[idx % this.tabs.length].click();
        break;
      }

      default:
        break;
    }
  }
}
import { Component, Element, Event, EventEmitter, Method, Prop, Watch, h } from '@stencil/core';
import Popover from '../../utils/popover';

let id = 0;

/**
 * @since 2.0
 * @status stable
 *
 * @slot trigger - The dropdown's trigger, usually a `<sl-button>` element.
 * @slot - The dropdown's content.
 *
 * @part base - The component's base wrapper.
 * @part trigger - The container that wraps the trigger.
 * @part panel - The panel that gets shown when the dropdown is open.
 */

@Component({
  tag: 'nxc-dropdown',
  styleUrl: 'nxc-dropdown.scss',
  shadow: true,
})
export class NxcDropdown {
  componentId = `dropdown-${++id}`;
  ignoreMouseEvents = false;
  ignoreMouseTimeout: any;
  ignoreOpenWatcher = false;
  panel: HTMLElement;
  popover: Popover;
  trigger: HTMLElement;

  @Element() host: HTMLNxcDropdownElement;

  /** Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /**
   * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
   * inside of the viewport.
   */
  @Prop() placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'bottom-start';

  /** Determines whether the dropdown should hide when a menu item is selected. */
  @Prop() closeOnSelect = true;

  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). */
  @Prop() containingElement: HTMLElement = this.host;

  /** The distance in pixels from which to offset the panel away from its trigger. */
  @Prop() distance = 2;

  /** The distance in pixels from which to offset the panel along its trigger. */
  @Prop() skidding = 0;

  /** Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event() nxcShow: EventEmitter;

  /** Emitted after the dropdown opens and all transitions are complete. */
  @Event() nxcAfterShow: EventEmitter;

  /** Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event() nxcHide: EventEmitter;

  /** Emitted after the dropdown closes and all transitions are complete. */
  @Event() nxcAfterHide: EventEmitter;

  @Watch('open')
  handleOpenChange() {
    if (!this.ignoreOpenWatcher) {
      this.open ? this.show() : this.hide();
    }
  }

  @Watch('placement')
  @Watch('distance')
  @Watch('skidding')
  handlePopoverOptionsChange() {
    this.popover.setOptions({ placement: this.placement });
  }

  connectedCallback() {
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleTriggerKeyDown = this.handleTriggerKeyDown.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  componentDidLoad() {
    this.popover = new Popover(this.trigger, this.panel, {
      placement: this.placement,
      skidding: this.skidding,
      distance: this.distance,
      onAfterHide: () => this.nxcAfterHide.emit(),
      onAfterShow: () => this.nxcAfterShow.emit(),
      onTransitionEnd: () => {
        if (!this.open) {
          this.panel.scrollTop = 0;
        }
      }
    });

    // Show on init if open
    if (this.open) {
      this.show();
    }
  }

  componentDidUnload() {
    this.hide();
    this.popover.destroy();
  }

  /** Shows the dropdown panel */
  @Method()
  async show() {
    this.ignoreOpenWatcher = true;
    this.open = true;

    const nxcShow = this.nxcShow.emit();

    if (nxcShow.defaultPrevented) {
      this.open = false;
      this.ignoreOpenWatcher = false;
      return;
    }

    this.popover.show();
    this.ignoreOpenWatcher = false;

    this.panel.addEventListener('slSelect', this.handlePanelSelect);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
  }

  /** Hides the dropdown panel */
  @Method()
  async hide() {
    this.ignoreOpenWatcher = true;
    this.open = false;

    const nxcHide = this.nxcHide.emit();

    if (nxcHide.defaultPrevented) {
      this.open = true;
      this.ignoreOpenWatcher = false;
      return;
    }

    this.popover.hide();
    this.ignoreOpenWatcher = false;

    this.panel.removeEventListener('slSelect', this.handlePanelSelect);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  focusOnTrigger() {
    const slot = this.trigger.querySelector('slot');
    const trigger = slot.assignedElements({ flatten: true })[0] as any;
    if (trigger) {
      if (typeof trigger.setFocus === 'function') {
        trigger.setFocus();
      } else if (typeof trigger.focus === 'function') {
        trigger.focus();
      }
    }
  }

  getMenu() {
    return this.panel
      .querySelector('slot')
      .assignedElements({ flatten: true })
      .filter(el => el.tagName.toLowerCase() === 'sl-menu')[0] as HTMLNxcMenuElement;
  }

  handleDocumentKeyDown(event: KeyboardEvent) {
    // Close when escape is pressed
    if (event.key === 'Escape') {
      this.hide();
      this.focusOnTrigger();
      return;
    }

    // Close when tabbing results in the focus leaving the containing element
    if (event.key === 'Tab') {
      setTimeout(() => {
        if (
          document.activeElement &&
          document.activeElement.closest(this.containingElement.tagName.toLowerCase()) !== this.containingElement
        ) {
          this.hide();
          return;
        }
      });
    }

    // Prevent scrolling when certain keys are pressed
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
    }

    // If a menu is present, focus on it when certain keys are pressed
    const menu = this.getMenu();
    if (menu && ['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      menu.setFocus();
      return;
    }
  }

  handleDocumentMouseDown(event: MouseEvent) {
    // Close when clicking outside of the close element
    const path = event.composedPath() as Array<EventTarget>;
    if (!path.includes(this.containingElement)) {
      this.hide();
      return;
    }
  }

  handlePanelSelect(event: CustomEvent) {
    const target = event.target as HTMLElement;

    // Hide the dropdown when a menu item is selected
    if (this.closeOnSelect && target.tagName.toLowerCase() === 'sl-menu') {
      this.hide();
      this.focusOnTrigger();
    }
  }

  handleTriggerKeyDown(event: KeyboardEvent) {
    // Open the panel when pressing down or up while focused on the trigger
    if (!this.open && ['ArrowDown', 'ArrowUp'].includes(event.key)) {
      this.show();
      event.preventDefault();
      event.stopPropagation();
    }

    // All other keys focus the menu and initiate type-to-select
    const menu = this.getMenu();
    if (menu && event.target !== menu) {
      menu.setFocus();
      menu.typeToSelect(event.key);
      return;
    }
  }

  togglePanel() {
    this.open ? this.hide() : this.show();
  }

  render() {
    return (
      <div
        part="base"
        id={this.componentId}
        class={{
          dropdown: true,
          'dropdown--open': this.open
        }}
        aria-expanded={this.open}
        aria-haspopup="true"
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          ref={el => (this.trigger = el)}
          onKeyDown={this.handleTriggerKeyDown}
          onClick={this.togglePanel}
        >
          <slot name="trigger" />
        </span>

        <div
          ref={el => (this.panel = el)}
          part="panel"
          class="dropdown__panel"
          role="menu"
          aria-hidden={!this.open}
          aria-labeledby={this.componentId}
          hidden
        >
          <slot />
        </div>
      </div>
    );
  }
}

import {
  Component,
  h,
  Prop,
  Element,
  Watch,
  Event,
  Method,
  Host,
} from '@stencil/core';
import { EventEmitter, Alert, ComponentType } from '@nxc/ui/core';

@Component({
  tag: 'nxc-alert',
  styleUrl: 'nxc-alert.scss',
  shadow: true,
})
export class NxcAlert implements Alert {
  alert: HTMLElement;

  @Element() host: HTMLNxcAlertElement;

  @Prop({ mutable: true, reflect: true }) open = false;

  @Prop() closable = false;

  @Prop() type: ComponentType = 'primary';

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  @Event() nxcShow: EventEmitter;
  @Event() nxcAfterShow: EventEmitter;
  @Event() nxcHide: EventEmitter;
  @Event() nxcAfterHide: EventEmitter;

  connectedCallback() {
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  componentDidLoad() {
    if (this.open) {
      this.show();
    }
  }

  @Method()
  async show() {
    const nxcShow = this.nxcShow.emit();

    if (nxcShow.defaultPrevented) {
      return false;
    }

    this.host.hidden = false;
    this.host.clientWidth; // force a reflow
    this.open = true;
  }

  @Method()
  async hide() {
    const nxcHide = this.nxcHide.emit();

    if (nxcHide.defaultPrevented) {
      return false;
    }

    this.open = false;
  }

  handleCloseClick() {
    this.hide();
  }

  handleTransitionEnd(event: TransitionEvent) {
    const target = event.target as HTMLElement;

    if (
      event.propertyName === 'opacity' &&
      target.classList.contains('alert')
    ) {
      this.host.hidden = !this.open;
      this.open ? this.nxcAfterShow.emit() : this.nxcAfterHide.emit();
    }
  }

  render() {
    return (
      <Host hidden>
        <div
          ref={(el) => (this.alert = el)}
          part="base"
          class={{
            alert: true,
            'alert--open': this.open,
            'alert--closable': this.closable,

            'alert--primary': this.type === 'primary',
            'alert--success': this.type === 'success',
            'alert--info': this.type === 'info',
            'alert--warning': this.type === 'warning',
            'alert--danger': this.type === 'danger',
          }}
          role="alert"
          aria-hidden={!this.open}
          onTransitionEnd={this.handleTransitionEnd}
        >
          <span part="icon" class="alert__icon">
            <slot name="icon" />
          </span>

          <span part="message" class="alert__message">
            <slot />
          </span>

          {this.closable && (
            <nxc-icon-button
              part="close-button"
              class="alert__close"
              name="x"
              onClick={this.handleCloseClick}
            />
          )}
        </div>
      </Host>
    );
  }
}

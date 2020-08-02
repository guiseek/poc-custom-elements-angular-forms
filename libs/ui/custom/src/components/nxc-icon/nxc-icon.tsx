import { Component, h, Prop, State, Event, Watch, getAssetPath } from '@stencil/core';
import { requestIcon } from './nxc-icon.request';
import { EventEmitter } from '@nxc/ui/core';

const parser = new DOMParser();

@Component({
  tag: 'nxc-icon',
  styleUrl: 'nxc-icon.scss',
  shadow: true,
  assetsDirs: ['icons'],
})
export class NxcIcon {
  @State() svg: string;

  /**
   * The icon name
   */
  @Prop() name: string;

  /**
   * The icon path
   */
  @Prop() src: string;

  /**
   * The icon label
   */
  @Prop() label: string;

  @Event() nxcLoad: EventEmitter;

  /** Emitted when the icon failed to load. */
  @Event() nxcError: EventEmitter;

  @Watch('name')
  @Watch('src')
  handleChange() {
    this.setIcon();
  }

  componentDidLoad() {
    this.setIcon();
  }

  getLabel() {
    let label = '';

    if (this.label) {
      label = this.label;
    } else if (this.name) {
      label = this.name.replace(/-/g, ' ');
    } else if (this.src) {
      label = this.src.replace(/.*\//, '').replace(/-/g, ' ').replace(/\.svg/i, '');
    }

    return label;
  }

  setIcon() {
    const url = this.name ? getAssetPath(`./icons/${this.name}.svg`) : this.src;
    requestIcon(url)
      .then(source => {
        const doc = parser.parseFromString(source, 'text/html');
        const svg = doc.body.querySelector('svg');

        if (svg) {
          this.svg = svg.outerHTML;
          this.nxcLoad.emit();
        } else {
          this.svg = '';
          this.nxcError.emit();
        }
      })
      .catch(error => this.nxcError.emit(error));
  }

  render() {
    return <div part="base" class="icon" role="img" aria-label={this.getLabel()} innerHTML={this.svg} />;
  }
}

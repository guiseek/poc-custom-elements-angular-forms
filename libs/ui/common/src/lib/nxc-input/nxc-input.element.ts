import { ElementConstructor, EventWithTarget } from '@nxc/ui/core';

export class NxcInputElement extends HTMLElement {
  static formAssociated = true;

  static observedAttributes = ['type', 'disabled', 'placeholder'];

  input_: HTMLNxcInputElement | HTMLInputElement;
  internals_;
  attachInternals = () => {
    console.log('attachInternals');
    return {}
  };

  constructor({
    template = '',
    styles = '',
    mode = 'open',
    delegatesFocus = true,
  }: ElementConstructor) {
    super();

    this.internals_ = this.attachInternals();

    this.attachShadow({ mode, delegatesFocus });
    this.shadowRoot.innerHTML = `${styles + template}`;
    
    this.input_ = this.shadowRoot.querySelector('nxc-input');
    this.setAttribute('tabindex', '0');

    const _boundOnInput = this.onInput.bind(this);
    this.addEventListener('input', _boundOnInput);

  }

  // Called whenever the value is updated.
  onInput(e?: InputEvent) {
    console.log(e);
    
    if (
      !this.matches(':disabled') &&
      this.hasAttribute('required') &&
      this.value.length < 5
    ) {
      this.internals_.setValidity(
        { customError: true },
        'Use at least 5 characters.'
      );
    } else {
      this.internals_.setValidity({});
    }
    this.internals_.setFormValue(this.value);
  }

  // New lifecycle callbacks for form-associated
  //  custom elements.

  // New lifecycle callback. This is called when association with
  // <form> is changed.
  formAssociatedCallback(nullableForm) {
    console.log('Form associated.');
  }

  // New lifecycle callback. This is called when ‘disabled’ attribute of
  // this element or an ancestor <fieldset> is updated.
  formDisabledCallback(disabled) {
    // Do something.  e.g. adding/removing ‘disabled’ content attributes
    // to/from form controls in this shadow tree.
    if (disabled) {
      console.log('is disabled');
    }
  }

  // New lifecycle callback. This is called when the owner form is reset.
  formResetCallback() {
    this.value = this.getAttribute('value') || '';
    this.onInput();
  }

  // New lifecycle callback. This is called when the browser wants to
  // restore user-visible state.
  formStateRestoreCallback(state, mode) {
    this.value = state;
    this.onInput();
  }

  // Mostly boilerplate--add common form control
  // properties and methods. Many are simply wired
  // through to the ElementInternals object.

  get form() {
    return this.internals_.form;
  }

  get name() {
    return this.getAttribute('name');
  }

  get type() {
    return this.localName;
  }

  // Form controls usually expose a "value"  property
  get value() {
    return this.input_.value;
  }
  set value(v) {
    this.input_.value = v;
  }

  get validity() {
    return this.internals_.validity;
  }
  get validationMessage() {
    return this.internals_.validationMessage;
  }
  get willValidate() {
    return this.internals_.willValidate;
  }

  checkValidity() {
    return this.internals_.checkValidity();
  }
  reportValidity() {
    return this.internals_.reportValidity();
  }

  // Standard custom element callback
  // Here, we forward values like placeholder and disabled
  // to the internal input
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('name: ', name);

    this.input_[name] = newValue;
  }
}

export class NxcControl extends HTMLFormElement {
  static formAssociated = true;

  static observedAttributes = ['disabled', 'placeholder'];

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    // Don’t need to register ‘formdata’ event handler.

    this.attachShadow({ mode: 'open', delegatesFocus: true });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block; 
          padding: 3px;
          border: 2px solid #ccc;
          box-sizing: border-box;
        }
        :host(:invalid) {
          border: 2px solid red;
        }
        input {
          box-sizing: border-box;
          width: 100%;
        }
      </style>
      <input>`;
    this.input_ = this.shadowRoot.querySelector('input');
    this.input_.addEventListener('input', () => this.onInput());
    this.setAttribute('tabindex', '0');

    // Do something if <label> is clicked.
    this.addEventListener('click', () => {
      this.input_.focus();
    });
  }

  // Called whenever the value is updated.
  onInput() {
    if (
      !this.matches(':disabled') &&
      this.hasAttribute('required') &&
      this.value.length < 5
    )
      this.internals_.setValidity(
        { customError: true },
        'Use at least 5 characters.'
      );
    else this.internals_.setValidity({});
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
    this.input_[name] = newValue;
  }
}

customElements.define('my-control', NxcControl);

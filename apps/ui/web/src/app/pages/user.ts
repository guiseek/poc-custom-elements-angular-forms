export default class AboutUs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="page">
        <h1>User</h1>
      </div>
    `;
  }
}

customElements.define('user-page', AboutUs);

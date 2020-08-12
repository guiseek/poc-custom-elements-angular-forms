export default class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="page">
        <h1>Home</h1>
      </div>
    `;
  }
}

customElements.define('home-page', Home);

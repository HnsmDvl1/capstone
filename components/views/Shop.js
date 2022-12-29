import html from "html-literal";

export default state => html`
  <section id="shop">
    ${state.products
      .map(
        product => html`
          <div class="product">
            <img src="${product.image}" />
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
          </div>
        `
      )
      .join("")}
  </section>
`;

import html from "html-literal";

export default links => html`
  <section id="navBar">
    <h1>Hidden Treasures</h1>
    <nav>
      <!-- <i class="fas fa-bars"></i> -->
      <ul class="hidden--mobile nav-links">
        ${links
          .map(
            link =>
              `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
          )
          .join("")}
      </ul>
    </nav>
  </section>
`;

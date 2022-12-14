import html from "html-literal";

export default links => html`
  <!-- <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
    .map(
      link =>
        `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
    )
    .join("")}
    </ul>
  </nav> -->
  <header>
    <ul class="navBar">
      <li class="bar"><a href="Home">HOME</a></li>
      <li class="bar"><a href="#">SHOP</a></li>
      <li class="bar"><a href="About">ABOUT</a></li>
      <li class="bar"><a href="Contact">CONTACT</a></li>
      <li class="bar"><a href="#"> SHOPPING BAG</a></li>
    </ul>
  </header>
`;

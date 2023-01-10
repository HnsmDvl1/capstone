import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h1>Hidden Treasures</h1>
    <h2>by Debora Sue</h2>
    <a href="shop" type="button">ENTER SHOP</a>
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </section>
`;

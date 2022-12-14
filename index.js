import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  // afterRender();
  router.updatePageLinks();
}
// function afterRender() {
//   // add menu toggle to bars icon in nav bar
//   document.querySelector(".fa-bars").addEventListener("click", () => {
//     document.querySelector("nav > ul").classList.toggle("hidden--mobile");
//   });
// }

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Shop":
        axios
          .get("https://fakestoreapi.com/products/category/jewelery")
          .then(response => {
            console.log(response.data);
            store.Shop.products = response.data;
            done();
          });
        break;
      // case "Footer":
      //   axios
      //     .get(
      //       `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
      //     )
      //     .then(response => {
      //       const kelvinToFahrenheit = kelvinTemp =>
      //         Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

      //       store.Footer.weather = {};
      //       store.Footer.weather.city = response.data.name;
      //       store.Footer.weather.temp = kelvinToFahrenheit(
      //         response.data.main.temp
      //       );
      //       store.Footer.weather.feelsLike = kelvinToFahrenheit(
      //         response.data.main.feels_like
      //       );
      //       store.Footer.weather.description = response.data.weather[0].main;
      //       done();
      //     })
      //     .catch(err => console.log(err));
      //   break;
      // //could add a 'switch case' statement here for a 2nd route
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();

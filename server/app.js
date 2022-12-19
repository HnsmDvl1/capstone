// 'Import' Express modules instead of http
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

const PORT = process.env.PORT || 4040; // we use || to provide a default value

// express's value is being assigned to set 'app'lication variable
const app = express();

//connecting to mongo
mongoose.connect(process.env.MONGODB);

//labeling the connection as set variable db
const db = mongoose.connection;

//two event handlers to indicate connection status
//1st-listening for 'error' events
db.on("error", console.error.bind(console, "Connection Error:"));
//2nd-indicates a good connection
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

//Middleware
//express.json allows chaining of middleware
//this has 2 middleware chained
//'app.use(express.json())' and 'app.use(logging)'
app.use(express.json()).use(logging);

// Request handler-home route
// app
//   .route("/status")
//   .get((request, response) => {
//     response.status(200).json({ message: "Service healthy" });
//   })

// Request handler-home route
app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

//handler method echoes back a request w/JSON body
app.post((request, response) => {
  response.json({ requestBody: request.body });
});

//part of express boilerplate-indicates listening on port# to show coding execution
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

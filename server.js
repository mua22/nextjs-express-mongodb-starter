const express = require("express");
const mongoose = require("mongoose");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
  let dbConnectionString = process.env.DB_CONNECTION_STRING;

  mongoose
    .connect(dbConnectionString, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("DB Connected: " + dbConnectionString);
    })
    .catch((err) => {
      console.log("Unable to Connect to DB");
    });
});

const express = require("express");
const bodyParser = require("body-parser");
const sqlConnection = require("./db");
const transactionRoutes = require("./routes/transaction");

var app = express();

//Configuring express server
app.use(bodyParser.json());

app.use("/api", transactionRoutes);
console.log("done");

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
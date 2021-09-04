const functions = require("firebase-functions");
const express = require("express");
const cors =require("cors");
const stripe =require("stripe")(
  "sk_test_51JMYvaSFCgqg44DgzDlBAxOsNZLaVhkQwIyNyFR5oLYCsSbLzSup1RZ067SZnA1W2uUfkRKiGVlF609TJ8eLTPih00Qy63iSHr"
  )


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


// import express from "express";
// import morgan from "morgan";

const express = require('express');
const app = express();
const giftRouter = require("./routes/gift-exchange");
const giftExchange = require("./models/gift-exchange");
const {NotFoundError} = require("./utils/errors");

const morgan = require('morgan');
app.use(morgan('tiny'));

// calling the express.json() method 
app.use(express.json());
   
app.get("/", (req, res) => {
   res.status(200).json({ping: "pong"});
});

app.use("/gift-exchange", giftRouter)
// app.use("/gift-exchange", giftExchange)

// app.use(giftExchange);

app.use((req, res, next) => {
   return next(new NotFoundError());
})

app.use((error, req, res, next)=> {
   const status = error.status || 500;
   const message = error.message;
   return res.status(status).json({
      error: {message, status}
   });

})

module.exports = app;
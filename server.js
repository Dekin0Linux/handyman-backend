const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

// ROUTERS
const clientAuth = require("./routes/clientAuth");
const freelancer = require("./routes/freelancerAuth");
const booking = require("./routes/bookings");
const transaction = require("./routes/Transactions");
const business = require("./routes/business");
const comments = require("./routes/comments");
const request = require("./routes/Request");

const app = express();
const port = process.env.PORT || 3001;
//configure doten
dotenv.config();
app.use(
  cors({
    origin: "*",
  })
); //ENABELING CORS

// MIDDLEWARES
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, "Handyman")));
//connect to mongodb database using Mongoose and the connection string from .env file
mongoose.connect(process.env.MONGODB_URL, {}).then((resp) => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
    console.log("Connected to DB");
  });
});

// ROUTES
app.use("/client", clientAuth);
app.use("/freelancer", freelancer);
app.use("/business", business);
app.use('/comments',comments)
app.use('/request',request)
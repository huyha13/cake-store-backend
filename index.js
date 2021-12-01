const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const db = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
db.connect();
// router
const cake = require("./routes/cake");
const user = require("./routes/user");
const cart = require("./routes/cart");
const news = require("./routes/news");
const promotions = require("./routes/promotions");
const store = require("./routes/store");
const customer = require("./routes/customer");
const order = require("./routes/order");
const staff = require("./routes/staff");
const perOrder = require("./routes/per-order");
app.use("/api/cake", cake);
app.use("/api/user", user);
app.use("/api/cart", cart);
app.use("/api/news", news);
app.use("/api/promotions", promotions);
app.use("/api/store", store);
app.use("/api/customer", customer);
app.use("/api/order", order);
app.use("/api/staff", staff);
app.use("/api/perOrder", perOrder);
app.listen(PORT, () => {
  console.log("App is running", PORT);
});

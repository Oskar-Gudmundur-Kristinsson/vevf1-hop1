import express from "express";
import ejs from "ejs";
import { menuRouter } from "./routes/menu.js";
import { categoriesRouter } from "./routes/categories.js";
import { ordersRouter } from "./routes/orders.js";
import { usersRouter } from "./routes/users.js";

const app = express();

app.set("veiw engine", ejs);
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
    async function renderAfterLoad() {
      res.render("index.ejs");
    }
  
    renderAfterLoad();
});
  
app.use("/menu", menuRouter);
app.use("/categories", categoriesRouter);
app.use("/cart", cartRouter);
app.use("/orders", ordersRouter);
app.use("/users", usersRouter);
  
app.listen(3000, () => {
    console.log("Server running at http://127.0.0.1:3000/"); // eslint-disable-line no-console
});
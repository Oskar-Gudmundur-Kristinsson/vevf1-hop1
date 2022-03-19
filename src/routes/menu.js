import express from "express";
import ws from "ws";

const menuRouter = express.Router();

menuRouter.get("/", (req, res) => {
    let cat = req.category;
    let query = req.query;
    let menuItems = getMenu(cat, query);
    
    res.render("menu.ejs", {menuItems : menuItems});
});

export { menuRouter }
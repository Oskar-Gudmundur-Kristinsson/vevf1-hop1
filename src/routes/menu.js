import express from "express";
import ws from "ws";
import checkNotAuthenticated, { checkIsAdmin } from "../utils/auth.js";
import checkAuthenticated from "../utils/auth.js";

const menuRouter = express.Router();

menuRouter.get("/", (req, res) => {
    let cat = req.category;
    let query = req.query;
    let menuItems = await getMenu(cat, query);
    
    res.render("menu.ejs", {menuItems : menuItems});
});

menuRouter.post("/", checkAuthenticated, (req, res) => {
    if(checkIfAdmin(req)){
        res.status(403).send({success: false, error: {message: 'Not authenticated as admin'}});
    }else{
        let title = sanitize(req.body.title);
        let price = sanitize(req.body.price);
        let description = sanitize(req.body.description);
        let image = sanitize(req.body.image);
        let cat = sanitize(req.body.category);
        await createMenuItem(title,price,description,image,cat);
        res.end("sucsess");
    }
});

menuRouter.get("/:id", (req, res) => {
    let item = getMenuItem(req.params.id);
    res.render("menu.ejs", { menuItem: item });
});

menuRouter.patch("/:id", checkIsAdmin, (req, res) => {
    
});

export { menuRouter }
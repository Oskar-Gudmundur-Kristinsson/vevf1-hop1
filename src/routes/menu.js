import express from "express";

const menuRouter = express.Router();

menuRouter.get("/", (req, res) => {
    menuItems = getMenu();
    
});

export { menuRouter }
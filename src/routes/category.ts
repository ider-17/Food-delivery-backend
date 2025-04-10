import express from "express";
import { createCategory, deleteCategory, getCategories, getCategoriesWithFoods } from "../controller/category";
import { get } from "mongoose";
import { checkToken } from "../middleware/check-token";

const categoryRouter = express.Router();

categoryRouter.post("/", checkToken, createCategory).get("/", getCategories).get("/with-foods", getCategoriesWithFoods).delete("/:id", deleteCategory);

export { categoryRouter };

// asdansda
// asdasdadsd

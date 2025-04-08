import express from "express";
import { createCategory, deleteCategory, getCategories, getCategoriesWithFoods } from "../controller/category";
import { get } from "mongoose";

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory).get("/", getCategories).get("/with-foods", getCategoriesWithFoods).delete("/:id", deleteCategory);

export { categoryRouter };

// asdansda
// asdasdadsd

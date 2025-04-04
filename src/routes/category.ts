import express from "express";
import { createCategory, getCategories, getCategoriesWithFoods } from "../controller/category";
import { get } from "mongoose";

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory).get("/", getCategories).get("/with-foods", getCategoriesWithFoods);

export { categoryRouter };

// asdansda
// asdasdadsd

import express from 'express';
import { createFood, deleteFood, getFoods, patchUpdateFoods, updateFoods, } from '../controller/food';

const foodRouter = express.Router();

foodRouter.post("/", createFood).get("/", getFoods).put("/:id", updateFoods).delete("/:id", deleteFood).patch("/:id", patchUpdateFoods);

export { foodRouter };
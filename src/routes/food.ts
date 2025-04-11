import express from 'express';
import { createFood, deleteFood, getFoods, patchUpdateFoods, updateFoods, } from '../controller/food';
import { checkToken } from '../middleware/check-token';

const foodRouter = express.Router();

foodRouter.post("/", checkToken, createFood).get("/", getFoods).put("/:id", updateFoods).delete("/:id", deleteFood).patch("/:id", patchUpdateFoods);

export { foodRouter };
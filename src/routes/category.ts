import express from "express";
import { createCategory, getCategoryes } from "../controller/category";

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory).get("/", getCategoryes);

export { categoryRouter };
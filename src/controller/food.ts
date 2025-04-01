import { response } from "express";
import { Food } from "../schema/Food";

export const createFood = async (request, response) => {
    const created = await Food.create(request.body);

    response.json({ success: true, food: created });
}
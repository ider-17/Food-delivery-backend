import { Food } from "../schema/Food";

export const createFood = async (request, response) => {
    const created = await Food.create(request.body);

    response.json({ success: true, food: created });
}

export const getFoods = async (_request, response) => {
    const foods = await Food.find().populate("category");

    response.json({ success: true, foods });
}

export const updateFoods = async (request, response) => {
    const { id } = request.params;
    const foodData = request.body;

    try {
        const updatedFood = await Food.findByIdAndUpdate(id, foodData, { new: true }).populate("category");

        if (!updatedFood) {
            return response.status(404).json({ success: false, message: "Food item not found " })
        }

        return response.json({ success: true, food: updatedFood });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ success: false, message: "Server error" });
    }
}

export const deleteFood = async (request, response) => {
    const { id } = request.params;

    try {
        const deletedFood = await Food.findByIdAndDelete(id);

        if (!deletedFood) {
            return response.status(404).json({ success: false, message: "Food item not found" })
        }
        return response.json({ success: true, message: "Food item deleted successfully" });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ sucess: false, message: "Server error" });
    }
}
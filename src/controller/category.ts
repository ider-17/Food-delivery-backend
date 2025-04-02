import { Category } from "../schema/Category";

export const createCategory = async (request, response) => {
    try {
        const created = await Category.create(request.body);

        response.json({ success: true, category: created });
    } catch (error) {
        response.status(401).json({ success: false, msg: error.message });
    }
};

export const getCategoryes = async (_request, response) => {
    const category = await Category.find();

    response.json({ success: true, category });
}
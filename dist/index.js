"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const food_1 = require("./routes/food");
const connection_1 = require("./utils/connection");
const category_1 = require("./routes/category");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.use('/api/v1/foods', food_1.foodRouter);
app.use("/api/v1/categories", category_1.categoryRouter);
const foods = [
    {
        _id: 1,
        foodName: "pizza",
        price: 24900,
        image: "http//kdjsahfhaskjf",
        ingredients: "skahdf",
        category: 2,
        createdAt: "2025:03:21",
        updatedAt: "2025:03:24",
    },
    {
        _id: 2,
        foodName: "tsuivan",
        price: 14900,
        image: "http//lsdjafl",
        ingredients: "hgjashdkgh",
        category: 1,
        createdAt: "2025:03:25",
        updatedAt: "2025:03:28",
    },
    {
        _id: 3,
        foodName: "chicken",
        price: 15900,
        image: "http//sakdfhjaskdhf",
        ingredients: "gkjasdhgka",
        category: 3,
        createdAt: "2025:03:22",
        updatedAt: "2025:03:23",
    }
];
// app.put("/api/v1/food/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const food = await Food.findByIdAndUpdate(id, req.body);
//         if (!food) {
//             res.status(404).json({ message: "Food not found" });
//         }
//         // const updatedFood = await Food.findById(id);
//         res.status(200).json({ message: "Food updated successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })
// app.get('/', (_req: Request, res: Response) => {
//     res.json({ message: "hello" });
// });
// app.get("/foods", async (_req: Request, res: Response) => {
//     const foods = await Food.find();
//     res.json({ success: true, foods });
// });
// app.post('/foods', async (req, res) => {
//     const food = await Food.create(req.body);
//     console.log(req.body);
//     res.json({ success: true, food })
// });
// app.get("/foods", async (_req, res) => {
//     const food = await Food.find();
//     res.json({ success: true, food });
// });
// app.put("/food:id", (req, res) => {
//     const { id } = req.params;
//     const food = Food.find((f) => f._id === Number(id));
//     if (!food) {
//         res.status(404).json({ success: false, message: "Food not found" });
//         return
//     }
//     res.json({ success: true, food });
// })
// app.get("/foods/:id", (req, res) => {
//     const { id } = req.params;
//     const food = foods.find((food) => food._id === Number(id));
//     if (!food) {
//         res.status(404).json({ success: false, message: "Food not found" });
//         return
//     }
//     res.json({ success: true, food });
// })
// app.put("/foods/:id", (req, res) => {
//     const { id } = req.params;
//     console.log(req.body);
//     foods.filter((food, index) => {
//         if (food._id === Number(id)) {
//             const updateFood = { ...food, ...req.body };
//             foods[index] = updateFood;
//         }
//     });
//     console.log(foods)
//     res.json({ success: true, foods });
// })
// app.post("/foods", (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// });
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.connection)();
    console.log(`Server is running on port ${PORT}`);
}));
//# sourceMappingURL=index.js.map
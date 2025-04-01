import express from "express";
import dotenv from 'dotenv';
import { Food } from "./schema/Food";
import { foodRouter } from "./routes/food";
import { connection } from "./utils/connection";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = 8000;

app.use('/api/v1/food', foodRouter);

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
]

// app.get('/', (_req: Request, res: Response) => {
//     res.json({ message: "hello" });
// });

// app.get("/foods", async (_req: Request, res: Response) => {
//     const foods = await Food.find();
//     res.json({ success: true, foods });
// });

app.post('/foods', async (req, res) => {
    const food = await Food.create(req.body);
    console.log(req.body);
    res.json({ success: true, food })
});

app.get("/foods", async (_req, res) => {
    const food = await Food.find();
    res.json({ success: true, food });
});

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

app.listen(PORT, async () => {
    await connection();
    console.log(`Server is running on port ${PORT}`);
});
import express, { Request, Response } from "express";

const port = 3000;

const app = express();

app.get('/', (_req: Request, res: Response) => {
    const food = [
        {
            tsuivan: {
                id: 1,
                foodName: "tsuivan",
                price: 14900,
                image: "http//lsdjafl",
                ingredients: "hgjashdkgh",
                category: 1,
                createdAt: "2025:03:25",
                updatedAt: "2025:03:28",
            }
        },
        {
            pizza: {
                id: 2,
                foodName: "pizza",
                price: 24900,
                image: "http//kdjsahfhaskjf",
                ingredients: "skahdf",
                category: 2,
                createdAt: "2025:03:21",
                updatedAt: "2025:03:24",
            }
        },
        {
            chicken: {
                id: 3,
                foodName: "chicken",
                price: 15900,
                image: "http//sakdfhjaskdhf",
                ingredients: "gkjasdhgka",
                category: 3,
                createdAt: "2025:03:22",
                updatedAt: "2025:03:23",
            }
        }
    ]
    res.json(food);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
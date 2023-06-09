import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import customer from "./routes/customerRoutes.js";
import game from "./routes/gamesRouter.js";
import rental from "./routes/rentalsRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(customer);
app.use(game);
app.use(rental);

app.listen(process.env.PORT, () => {
    console.log("Server is running ate port: " + process.env.PORT);
})
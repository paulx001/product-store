import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import wishlistRoutes from "./routes/wishlistRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse incoming JSON requests
app.use(cors()); // enable cross-origin resource sharing
app.use(helmet()); // helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(morgan("dev")) // log the requests

app.use("/api/wishlists", wishlistRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})
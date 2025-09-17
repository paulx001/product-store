import express from "express";
import { createWishlist, getAllWishlists } from "../controllers/wishlistController.js";

const router = express.Router();

router.get("/", getAllWishlists)

router.post("/", createWishlist)

export default router;
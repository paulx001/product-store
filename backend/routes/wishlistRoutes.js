import express from "express";
import { createWishlist, getWishlists, getWishlist, updateWishlist, deleteWishlist } from "../controllers/wishlistController.js";

const router = express.Router();

router.get("/", getWishlists);
router.get("/:id", getWishlist);
router.post("/", createWishlist);
router.put("/:id", updateWishlist);
router.delete("/:id", deleteWishlist);

export default router;
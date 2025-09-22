import { sql } from "../config/db.js";

export const getWishlists = async (req, res) => {
    try {
        const wishlists = await sql`
            SELECT * FROM wishlists
            ORDER BY created_at DESC
        `;

        res.status(200).json({success: true, data: wishlists})
    } catch (error) {
        console.log("Error in getWishlists function", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
};

export const createWishlist = async (req, res) => {
    const {name, link, image} = req.body

    if (!name || !link || !image) {
        return res.status(400).json({successs:false, message:"All fields are required"})
    }

    try {
        const newWishlist = await sql`
            INSERT INTO wishlists (name, link, image)
            VALUES (${name},${link},${image})
            RETURNING *
        `;
        
        console.log("new wishlist added:", newWishlist)

        res.status(201).json({success: true, data: newWishlist[0]});

    } catch (error) {
        console.log("Error in createWishlists function", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
};


export const getWishlist = async (req, res) => {
    const { id } = req.params;

    try {
        const wishlist = await sql`
            SELECT * FROM wishlists WHERE id=${id}
        `;

        res.status(500).json({success: true, data: wishlist[0]});
    } catch (error) {
        console.log("Error in getWishlist function", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
};

export const updateWishlist = async (req, res) => {
    const { id } = req.params;
    const { name, link, image } = req.body;

    try {
        const updateWishlist = await sql`
            UPDATE wishlists
            SET name=${name}, link=${link}, image=${image}
            WHERE id=${id}
            REUTNRING *
        `;

        if (updateWishlist.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Wishlist not found",
            });
        }

    } catch (error) {
        console.log("Error in updateWishlist function", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
};

export const deleteWishlist = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedWishlist = await sql`
            DELETE FROM wishlists WHERE id=${id} RETURNING *
        `;

         if (deletedWishlist.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Wishlist not found",
            });
        }

        res.status(200).json({success: true, data: deletedWishlist[0]});
    } catch (error) {
        console.log("Error in deleteWishlist function", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
};

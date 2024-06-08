const mongoose = require('mongoose');
const productSchema = require('../models/product');
const upload=require('../middleware/upload')

exports.addProduct = [
    upload.single('image'),
    async (req, res, next) => {
        try {
            const user = req.userData;
            console.log("here");
            if (user.email === "samiramrullah@gmail.com") {
                const { name, price, description, category } = req.body;
                if (!name || !price || !category || !req.file) {
                    return res.status(400).json({ status: false, message: "Invalid Data" });
                }

                const validCategories = ['Electronics', 'Beauty', 'Clothing', 'Home and Kitchen', 'Miscellaneous'];
                if (!validCategories.includes(category)) {
                    return res.status(400).json({ status: false, message: "Invalid Category" });
                }

                const newProduct = new productSchema({
                    _id: new mongoose.Types.ObjectId(),
                    name,
                    price,
                    description,
                    category,
                    image: req.file.path // Save the image path
                });

                const savedProduct = await newProduct.save();

                return res.status(201).json({
                    status: true,
                    message: "Product Successfully Added",
                    savedProduct
                });
            } else {
                return res.status(403).json({
                    status: false,
                    message: "Unauthorized user. Failed to Add Product",
                });
            }
        } catch (error) {
            console.error("Error adding product:", error); // Log the error for debugging
            return res.status(500).json({ status: false, message: 'Failed to Add Product' });
        }
    }
];

exports.updateProduct = [
    upload.single('image'), 
    async (req, res, next) => {
        try {
            const user = req.userData;
            if (user.email === "samiramrullah@gmail.com") {
                const { productId } = req.params;
                const { name, price, description, category } = req.body;
                const validCategories = ['Electronics', 'Beauty', 'Clothing', 'Home and Kitchen', 'Miscellaneous'];
                if (category && !validCategories.includes(category)) {
                    return res.status(400).json({ status: false, message: "Invalid Category" });
                }
                const updateData = { name, price, description, category };
                if (req.file) {
                    updateData.image = req.file.path; // Update image path if new image is uploaded
                }

                const updatedProduct = await productSchema.findByIdAndUpdate(
                    productId,
                    updateData,
                    { new: true, runValidators: true }
                );

                if (!updatedProduct) {
                    return res.status(404).json({ status: false, message: "Product not found" });
                }

                return res.status(200).json({
                    status: true,
                    message: "Product Successfully Updated",
                    updatedProduct
                });
            } else {
                return res.status(403).json({
                    status: false,
                    message: "Unauthorized user. Failed to Update Product",
                });
            }
        } catch (error) {
            console.error("Error updating product:", error); // Log the error for debugging
            return res.status(500).json({ status: false, message: 'Failed to Update Product' });
        }
    }
];
exports.deleteProduct = async (req, res, next) => {
    try {
        const user = req.userData;

        if (user.email === "samiramrullah@gmail.com") {
            const { productId } = req.params;
            const deletedProduct = await productSchema.findByIdAndDelete(productId);
            if (!deletedProduct) {
                return res.status(404).json({ status: false, message: "Product not found" });
            }

            return res.status(200).json({
                status: true,
                message: "Product Successfully Deleted"
            });
        } else {
            return res.status(403).json({
                status: false,
                message: "Unauthorized user. Failed to Delete Product",
            });
        }
    } catch (error) {
        console.error("Error deleting product:", error); // Log the error for debugging
        return res.status(500).json({ status: false, message: 'Failed to Delete Product' });
    }
};

exports.viewProductById = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const product = await productSchema.findById(productId);

        if (!product) {
            return res.status(404).json({ status: false, message: "Product not found" });
        }

        return res.status(200).json({
            status: true,
            product
        });
    } catch (error) {
        console.error("Error viewing product:", error); // Log the error for debugging
        return res.status(500).json({ status: false, message: 'Failed to View Product' });
    }
};
exports.viewAllProducts = async (req, res, next) => {
    try {
        const products = await productSchema.find();

        return res.status(200).json({
            status: true,
            products
        });
    } catch (error) {
        console.error("Error viewing all products:", error); // Log the error for debugging
        return res.status(500).json({ status: false, message: 'Failed to View Products' });
    }
};


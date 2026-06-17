const Product =require('../models/product.model');

const cloudinary = require("../config/cloudinary");



const getProducts = async (req, res) => {



    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);


    }  catch (error) {
        res.status(500).json({message: error.message});
    }
};
 
const createProduct = async (req, res) => {
    try {
        console.log("BODY:", req.body);
console.log("FILE:", req.file);
        // validate fields
        if (!req.body.name || !req.body.price) {
            return res.status(400).json({ message: "Missing fields" });
        }

        let imageUrl = "";

        // check if file was uploaded
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
        }

        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            imageUrl: imageUrl
        });

        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct =async (req, res) => {
try {
    const {id} = req.params;
   const product = await Product.findByIdAndUpdate(id, req.body);

   if (!product) {
    return res.status(404).json({message: "product not found"});

   }

            const updatedproduct = await Product.findById(id);
            res.status(200).json(updatedproduct);



} catch (error) {
    res.status(500).json({message: error.message});
}
};

const deleteProduct = async (req, res) => {
try {
    const {id} = req.params;
   const product = await Product.findByIdAndDelete(id, req.body);

   if (!product) {
    return res.status(404).json({message: "product not found"});

   }

            res.status(200).json({message: "product deleted successfully"});



} catch (error) {
    res.status(500).json({message: error.message});
}
};


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

};
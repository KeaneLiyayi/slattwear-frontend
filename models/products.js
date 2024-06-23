import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
        required: false,  // Adjusted to not be required if images are optional
    },
    category: {
        type: String,
        required: true,
    },
    anime: {
        type: Boolean,
        required: true,
    }
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;

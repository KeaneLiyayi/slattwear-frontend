const { Schema, models, model } = require("mongoose")


const OrderSchema = new Schema({
    email: {
        required: true,
        type: String,

    },
    name: {
        type: String,
        required: true
    },

    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true
            }
        }
    ],
    deliverymethod: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: false
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
        default: "pending"
    },


})

const Order = models.Order || model('Order', OrderSchema)

export default Order
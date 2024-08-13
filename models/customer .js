import { model, models, Schema } from "mongoose";


const CustomerSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const Customer = models.Customer || model('Customer', CustomerSchema);

export default Customer;
import Order from "@/models/orders";

export default async function createOrder(req, res) {
    try {
        const { email, phone, address, city, zipcode, items, deliverymethod, name, total } = req.body;

        // Database logic to create order goes here
        const response = await Order.create({ email, phone, address, city, zipcode, items, deliverymethod, name, total });

        return res.status(200).json({ message: 'Order created successfully' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Error creating order' })
    }

}
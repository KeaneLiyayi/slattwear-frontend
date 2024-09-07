import Product from "@/models/products";

export default async function index(req, res) {
    try {
        const products = await Product.find({ category: 'accessory' })
        res.json({ products })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: "error while doing it " })

    }


}
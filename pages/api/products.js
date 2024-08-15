import { mongooseConnect } from '@/lib/mongoose'
import Product from '@/models/products'
import React from 'react'

const products = async (req, res) => {
    await mongooseConnect()
    try {
        const { category, id } = req.query
        if (category) {
            const query = category ? { category } : {};

            const products = await Product.find(query);
            return res.status(200).json({ products })


        } else if (id) {
            const product = await Product.findById(id);
            return res.status(200).json({ product })
        }


    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error fetching products' })
    }



}

export default products

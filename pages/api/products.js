import { mongooseConnect } from '@/lib/mongoose'
import Product from '@/models/products'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const products = async (req, res) => {
    await mongooseConnect()
    try {




        const products = await Product.find();
        return res.status(200).json({ products })





    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error fetching products' })
    }



}

export default products

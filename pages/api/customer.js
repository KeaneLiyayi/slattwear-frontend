import Customer from '@/models/customer ';
import React from 'react'

export default async function handleSubscribe(req, res) {
    try {
        const { email } = req.body;
        const existingUser = await Customer.findOne({ email: email })

        if (existingUser) {
            return res.json({ message: "User already subscribed " })
        }

        const newCustomer = await Customer.create({ email });
        return res.status(200).json({ message: "Subscribed successfully" })

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error subscribing to newsletter" })
        return;
    }
}
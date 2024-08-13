import { mongooseConnect } from "@/lib/mongoose"
import User from "@/models/users"
import hashPassword from "@/utils/passwordUtils"

export default async function createUSer(req, res) {


    try {
        const existingUser = await User.findOne({ email: req.body.email })


        const hashedPassword = await hashPassword(req.body.password)

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }
        const response = await User.create({ email: req.body.email, password: hashedPassword, name: req.body.name })
        return res.status(200).json({ message: "User created successfully" })

    } catch (err) {
        console.log("nikumoto")
        return res.status(500).json({ message: "Error creating user" })
    }
}
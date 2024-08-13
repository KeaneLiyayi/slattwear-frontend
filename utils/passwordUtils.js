import bcrypt from 'bcrypt';
const hashPassword = async (password) => {
    const saltrounds = 10
    try {

        const hashedPassword = await bcrypt.hash(password, saltrounds)
        return hashedPassword

    } catch (e) {
        throw new Error('Error hashing password')

    }


}

export default hashPassword;
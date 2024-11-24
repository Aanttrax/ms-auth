import bcrypt from 'bcryptjs';

const encryptPassword = async (password: string): Promise<string> => {
    try {
        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, salt)
        return encryptedPassword;
    } catch (e: unknown) {
        throw e;
    }
};

export default encryptPassword;

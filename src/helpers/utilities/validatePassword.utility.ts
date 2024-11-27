import bcrypt from 'bcryptjs';

const validatePassword = async (password: string, originPassword: string): Promise<boolean> => {
    try {
        const validate: boolean = await bcrypt.compare(password, originPassword)
        return validate;
    } catch (e: unknown) {
        throw e;
    }
};

export default validatePassword;

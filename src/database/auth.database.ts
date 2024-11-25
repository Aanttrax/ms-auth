import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import { UserSchema, IUser } from '@database/schemas/auth.schema';
import encryptPassword from '@utilities/encryptPassword.utility';
import validatePassword from '@utilities/validatePassword.utility';
import { RegisterData } from '@interfaces/registerData.interface';
import { LoginData } from '@interfaces/loginData.interface';
import { environment } from '@env/environment';
// import { Payload } from 'src/interfaces/payload.interface';

const { TOKEN_SECRET } = environment;

const User = mongoose.model('User', UserSchema, 'users')

const signUp = async (credentials: RegisterData): Promise<string> => {
    try {     
        const encryptedPassword: string = await encryptPassword(credentials.password)
        const user = await User.create({
            email: credentials.email,
            userName: credentials.userName,
            password: encryptedPassword,
            name: credentials.name,
            lastName: credentials.lastName
        })
        const token: string = jwt.sign({ _id: (user._id).toString() }, TOKEN_SECRET, { expiresIn: 60 * 60 * 24 } )
        return token;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', e.message )
        } else {
            console.error('\x1b[31m%s\x1b[0m', "❌ An unknown error was thrown. ", e);
        }
        throw e;
    }
};

const signIn = async (loginData: LoginData): Promise<string> => {
    try {
        const user: IUser | null = await User.findOne({
            email: loginData.email
        }).lean()
        if (!user) throw 'email not found'
        const validPassword: boolean = await validatePassword(loginData.password, user.password)
        if (!validPassword) throw 'incorrect Password'
        const token: string = jwt.sign({ _id: (user._id).toString() }, TOKEN_SECRET, { expiresIn: 60 * 60 * 24 })
        return token;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', e.message )
        } else {
            console.error('\x1b[31m%s\x1b[0m', "❌ An unknown error was thrown. ", e);
        }
        throw e;
    }
};

export default {
    signUp,
    signIn,
};

import { Request, Response, NextFunction } from 'express';
import { RegisterData } from '@interfaces/registerData.interface';
import { LoginData } from '@interfaces/loginData.interface';
import AuthDb from '@database/auth.database';

export default class AuthController {

    static async signUp( req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const registerData: RegisterData = req.body;
            const token: string = await AuthDb.signUp(registerData);
            res.status(200).header('auth-token', token).json({ success: true, response: 'user created' });
        } catch (e: unknown) {
            next(e);
        }
    }

    static async signIn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const loginData: LoginData = req.body;
            const token: string = await AuthDb.signIn(loginData);
            res.status(200).header('auth-token', token).json({ success: true, response: 'logged-in user' });
        } catch (e: unknown) {
            next(e);
        }
    }
   
}

import { Request, Response, NextFunction } from 'express';
import { RegisterData } from '@interfaces/registerData.interface';
import { LoginData } from '@interfaces/loginData.interface';
import { validateToken } from '@utilities/validateToken.utility';
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

    static async isAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const token = req.headers?.['auth-token']
            if (!token) {
                res.status(401).json({ success: false, response: 'Access denied' });
                return
            } 
            const userId= validateToken(token as string)
            const isAuthenticated = await AuthDb.isAuthenticated(userId);
            res.status(200).json({success: true, response: isAuthenticated})
            return
        } catch(e:unknown){
            next(e)
        }
    }
   
}

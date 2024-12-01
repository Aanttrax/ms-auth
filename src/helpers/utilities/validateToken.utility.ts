import jwt from 'jsonwebtoken';
import { Payload } from '@interfaces/payload.interface';
import { environment } from '@env/environment';

const { TOKEN_SECRET } = environment;

export const validateToken = (token:string) => {
    try {
        const payload = jwt.verify(token, TOKEN_SECRET) as Payload
        return payload._id
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', e.message )
        } else {
            console.error('\x1b[31m%s\x1b[0m', "❌ An unknown error was thrown. ", e);
        }
        throw e;
    }
}


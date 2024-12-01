import { Router } from 'express';
import AuthController from '@controllers/auth.controller';

const router: Router = Router();

router.post('/signup', AuthController.signUp);
router.post('/signin', AuthController.signIn);
router.get('/isauthenticated', AuthController.isAuthenticated)

export default router;

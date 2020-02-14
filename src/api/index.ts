import { Router } from 'express';
import users from './users/userRoute';

const router: Router = Router();

router.use('/users', users);

export default router;
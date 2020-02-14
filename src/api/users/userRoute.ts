import { Router } from 'express';
import * as userService from '../../service/userService';

const user: Router = Router();

user.post('/register', [
    userService.login
]);

export default user;

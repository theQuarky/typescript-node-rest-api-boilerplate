import { Router } from 'express';
import * as userService from '../../service/userService';
import * as userController from '../../controller/userController';

const user: Router = Router();

user.post('/test',[
    userService.login,
    userController.conform

])
user.post('/register', [
    userService.login
]);

export default user;

import { Router } from 'express';
import { body, check } from 'express-validator';
import { loginController } from '../../controllers/user/loginUserController';


const route = Router()
/**
 * @openapi 
 * '/login/user'
 * description: login user
 */
route.post('/login/user', [
    check('tgId').not().isEmpty().withMessage('telegram id is required'),
    check('password').isStrongPassword().not().isEmpty().withMessage('password is required'),
],
// validateRequest 
loginController
)




export  {route as LoginRouter}



import { Router } from 'express';
import { body, check } from 'express-validator';
import { registerController } from '../../controllers/user/registerUserController';

const router = Router()
/**
 * @openapi 
 * '/register/new-user'
 * description: registers new user
 */
router.post('/register/new-user', [
    check('tgId').not().isEmpty().withMessage('telegram id is required'),
    check('password').isStrongPassword().not().isEmpty().withMessage('password is required'),
    check('confirm_password').not().isEmpty().withMessage('confirm password must be the same as password')
], 
// validateRequest
registerController  
)


export  {router as registerUserRouter}



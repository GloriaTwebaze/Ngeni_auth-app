import jwt from 'jsonwebtoken';
import {  loggedInUserController } from "../../middlewares/auth";
import { Router } from "express"
import { check } from "express-validator"
// import { loggedInUserController } from "../../controllers/user/currentUserController"

const route = Router()

route.post('/loggedIn/user', [
    check('tgId').not().isEmpty().withMessage('telegram id is required'),
    check('password').isStrongPassword().not().isEmpty().withMessage('password is required'),
],
// validateRequest 
loggedInUserController
)

export {route as currentUserRoute}





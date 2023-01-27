import {Express} from 'express'
import { currentUserRoute } from "./endPoints/currentUserRouter";
import { LoginRouter } from "./endPoints/loginUserRouter";
import { registerUserRouter } from "./endPoints/registerUserRouter";


export const configureRoutes = (app: Express)=> {
    app.use(registerUserRouter)
    app.use (LoginRouter)
    app.use(currentUserRoute)
    

    app.get('/ping', (req, res)=> {
        console.log("Server on fire")
    })
}


import { configureMiddleware } from './middlewares/config'
import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import { connectToDatabase } from "./utils/databaseAccess"
import ErrorHandler from './models/ErrorHandler';
import { configureRoutes } from './routers';

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
*/
class Server {
  public app = express();
  public router = configureRoutes;
}


// initialize server app
const server = new Server();
configureMiddleware(server.app);

// make server listen on some port
((port = process.env.APP_PORT || 3001) => {
  server.app.listen(port, () => console.log(`> Server on fire ${port}`));
})();


connectToDatabase()
    .then(() => {
        server.app.use("/api", server.router);

    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

// make server app handle any error
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
});

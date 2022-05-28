import express, {Express} from 'express';
import cors from 'cors';
import db from './db';
import * as process from "process";
class App {
    private readonly app;

    constructor() {
        this.app = express();
        this.initMiddlewares();
    }

    initMiddlewares() : void {
        this.app.use(cors());
        this.app.use(express.json());
    }
    

    get appInstance(): Express {
        return this.app;
    }

    startServer() : void {
        this.app.listen( process.env.APP_PORT, () => {
            console.log( `server started at http://localhost:${ process.env.APP_PORT }` );
        } );
    }

}

const instance = new App();
export default instance;

import * as bodyParser from "body-parser";
const path = require('path');
import * as express from "express";
import { APILogger } from "./logger/api.logger";
import { SomethingController } from "./controller/something.controller";
// import swaggerUi = require('swagger-ui-express');
// import fs = require('fs');

class App {

    public express: express.Application;
    public logger: APILogger;
    public SomethingController: SomethingController;

    /* Swagger files start */
    // private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
    // private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    // private customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
    // private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
        this.SomethingController = new SomethingController();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(path.join(__dirname, '../ui/build')));
    }

    private routes(): void {

        this.express.get('/api/somethings', (req, res) => {
            this.SomethingController.getSomethings().then(data => res.json(data));
        });
        
        this.express.post('/api/something', (req, res) => {
            console.log(req.body);
            this.SomethingController.createSomething(req.body.something).then(data => res.json(data));
        });
        
        this.express.put('/api/something', (req, res) => {
            this.SomethingController.updateSomething(req.body.something).then(data => res.json(data));
        });
        
        this.express.delete('/api/something/:id', (req, res) => {
            this.SomethingController.deleteSomething(req.params.id).then(data => res.json(data));
        });

        this.express.get("/", (req, res, next) => {
            res.sendFile(path.join(__dirname, '../ui/build/index.html'));
        });

        // swagger docs
        //this.express.use('/api/docs', swaggerUi.serve, swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;
const express = require("express");
import { Express, Request, Response } from "express";
const port = 3000;

let app: Express = express();

app

app.get('/*', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
require("dotenv").config();
require("module-alias/register");
const socketControllers = require("./src/socketControllers");
const { SocketIo } = require("sm-express-server");
const { Server } = require("sm-express-server");
const routes = require("./src/rutes");
const path = require("path");
const connection = require("./src/connection");
const express = require("express");

connection.connect((err) => {
    if (err) {
        console.error(`Error connecting:  ${err}`);
        return;
    }
    const port = process.env.PORT || 4000;
    const direction = path.join(__dirname, process.env.PDP || ".");

    const server = new Server(port, direction, [], routes);

    server.start(() => {
        console.log(`server started on port ${port}`);
    });
    const socketIo = new SocketIo(server.server, "*", socketControllers);
});

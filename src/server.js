const express = require("express");
const { HOST, PORT } = require("./constants");
const PolynomialHash = require("./algorithms/PolynomialHash");

class Server {
    app = express();

    constructor() {
        this.app.set("port", PORT);
        this.app.set("host", HOST);
    }

    start() {
        this.app.listen(this.app.get("port"), () =>
            console.log(
                `Server is running on PORT http://${this.app.get(
          "host"
        )}:${this.app.get("port")}`
            )
        );
    }
}

module.exports = new Server();
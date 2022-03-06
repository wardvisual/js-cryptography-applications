const express = require("express");

class Server {
    app = express();

    constructor() {
        this.app.set("port", 4000);
        this.app.set("host", "localhost");
    }

    run() {
        this.app.listen(this.app.get("port"), () =>
            console.log(
                `Server is running on PORT http://${this.app.get(
          "host"
        )}:${this.app.get("port")}`
            )
        );
    }
}

const server = new Server();

server.run();
const server = require("./server");
const PolynomialHash = require("./algorithms/PolynomialHash");

const app = () => {
    server.start();
    console.log(new PolynomialHash().hash("edward"));
};

app();
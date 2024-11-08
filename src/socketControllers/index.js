const { createSocketController } = require("sm-express-server");

module.exports = [
    createSocketController("data", (data) => {
        console.log(data);
        return data;
    })
]
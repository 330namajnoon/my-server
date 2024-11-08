const { createRouter } = require("sm-express-server");
const { portfolio } = require("../controllers");

const portfolioRouter = createRouter("/portfolio", (router) => {
    router.get("/asset/:assetName", portfolio.getAssetController);
});

module.exports = portfolioRouter;
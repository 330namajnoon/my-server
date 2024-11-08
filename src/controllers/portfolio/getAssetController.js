const { createController } = require("sm-express-server");
const { errorResponse, fileSender } = require("../../utils/responseHandler");
const path = require("path");

const getAssetController = createController(async (req, res) => {
    try {
        const { assetName } = req.params;
        const filePath = path.join(__dirname, `../../mcd/assets/${assetName}`);
        return fileSender(res, filePath);
    } catch (error) {
        return errorResponse(res, error, 500, error?.message || error);
    }
});

module.exports = getAssetController;

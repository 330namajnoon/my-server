const connection = require("../../connection");

class Asset {
    constructor(id, type, asset_id, path) {
        this.id = id;
        this.type = type;
        this.asset_id = asset_id;
        this.path = path;
    }

    static getAsset(assetType, assetId) {
        return new Promise((resolve, reject) => {
            connection.changeUser({ database: "portfolio" }, (error) => {
                if (error) reject(error);
                connection.query("SELECT * FROM assets WHERE type = ? AND asset_id = ?", [assetType, assetId], (error, results) => {
                    if (error || !!!results.length) return reject(error);
                    resolve(new Asset(results[0].id, results[0].type, results[0].asset_id, results[0].path));
                });
            });
        });
    }
}

module.exports = Asset;

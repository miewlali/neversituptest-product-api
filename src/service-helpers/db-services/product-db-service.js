const Product = require("../../database/product");

class ProductDBService {
    getProducts(criteria, option) {
        const action = "getProducts";
        return new Promise((resolve, reject) => {
            try {
                console.log(`${action} (${global.config.appName} -> DB) ${JSON.stringify(criteria)} ${JSON.stringify(option)}`); //WRITE_LOG
                Product.paginate(criteria, option).then(resultData => {
                    console.log(`${action} (DB -> ${global.config.appName}) ${JSON.stringify(resultData)}`); //WRITE_LOG
                    resolve(resultData);
                }).catch(err => {
                    console.log(`${action} (DB -> ${global.config.appName}) ${err.toString()}`); //WRITE_LOG
                    reject({ status: 500, message: 'Database Error' });
                });
            } catch (error) {
                console.log(`Unknown error occured(${this.constructor.name}) ${error}`); //WRITE_LOG
                reject({ status: 500, message: 'System Error' });
            }
        });
    }
    getProduct(criteria) {
        const action = "getProduct";
        return new Promise((resolve, reject) => {
            try {
                console.log(`${action} (${global.config.appName} -> DB) ${JSON.stringify(criteria)}`); //WRITE_LOG
                Product.findOne(criteria).lean().then(resultData => {
                    console.log(`${action} (DB -> ${global.config.appName}) ${JSON.stringify(resultData)}`); //WRITE_LOG
                    resolve(resultData);
                }).catch(err => {
                    console.log(`${action} (DB -> ${global.config.appName}) ${err.toString()}`); //WRITE_LOG
                    reject({ status: 500, message: 'Database Error' });
                });
            } catch (error) {
                console.log(`Unknown error occured(${this.constructor.name}) ${error}`); //WRITE_LOG
                reject({ status: 500, message: 'System Error' });
            }
        });
    }
}
module.exports = new ProductDBService();
const productManager = require('./managers/product-manager');

class ProductService {
    async getProducts(req, res) {
        try {
            let result = await productManager.getProducts(req, res);
            console.log(`Response (${global.config.appName} -> Client) ${JSON.stringify(result)}`) //WRITE_LOG
            //WRITE_SUMMARY
            res.status(result.status).send(result.body);
        } catch (error) {
            console.log(`Error response (${global.config.appName} -> Client) ${error.body}`)
            res.status(error.status).send(error.body);
        }
    }
    async getProduct(req, res) {
        try {
            let result = await productManager.getProduct(req, res);
            console.log(`Response (${global.config.appName} -> Client) ${JSON.stringify(result)}`) //WRITE_LOG
            //WRITE_SUMMARY
            res.status(result.status).send(result.body);
        } catch (error) {
            console.log(`Error response (${global.config.appName} -> Client) ${error.body}`)
            res.status(error.status).send(error.body);
        }
    }

}

module.exports = new ProductService();
const productService = require('../src/services/product-service');

class Product {
    async getProducts(req, res) {
        productService.getProducts(req, res);
    }
    async getProduct(req, res) {
        productService.getProduct(req, res);
    }
}

module.exports = new Product();
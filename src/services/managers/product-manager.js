const productDbService = require('../../service-helpers/db-services/product-db-service');

class ProductManager {
    async getProducts(req, res) {
        // function check connection DB

        let result = await productDbService.getProducts({}, getPaginationSearchOption(req.query)).catch(err => {
            throw { status: err.status, body: err.message }
        })

        if (result.docs.length == 0) {
            throw { status: 404, body: 'Data not found' }
        }

        return ({ status: 200, body: result })
    }

    async getProduct(req, res) {
        // function check connection DB
        
        let result = await productDbService.getProduct({ _id: req.params.id }).catch(err => {

            throw { status: err.status, body: err.message }
        })

        if (!result) {
            throw { status: 404, body: 'Data not found' }
        }
        return ({ status: 200, body: result })
    }
}

function getPaginationSearchOption(query) {
    let option = { lean: true, leanWithId: false, limit: 10, page: 1 };
    if (query.sortBy) {
        option.sort = query.sortBy.replace(",", " ");
    }
    if (query.limit && Utility.isNumber(parseInt(query.limit))) {
        option.limit = parseInt(query.limit);
    }
    if (query.page && Utility.isNumber(parseInt(query.page))) {
        option.page = parseInt(query.page);
    }
    return option;
}

module.exports = new ProductManager();
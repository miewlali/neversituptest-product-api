const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    thumbnail: { type: String }
}, { versionKey: false })

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("product", productSchema, "products");
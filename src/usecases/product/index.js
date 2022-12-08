const product = require("../../models/products").model;

const getAll = async () => await Product.find({});

const create = async (data) => {
    const { sku, price, name, stockQty } = data;

    const product = new Product({ sku, price, name, stockQty });
    return await product.save();
};

module.exports = { getAll, create };
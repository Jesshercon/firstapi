const Category = require("../../models/category").model;

const getAll = async () => {
    //name: /pantalones/i, isActive: true (Dentro de .find para encontrar datos exactos si es que se necesita)
    return await Category.find({}).exec();
};

const getById = async (id) => {
    return await Category.findById(id).populate("products").exec();
};

const create = async (name) => {
    //   const data = { name };
    const category = new Category({ name });
    return await category.save();
};

const update = async (id, data) => {
    const { name, products } = data;
    // if (!name || !products) {
    //     const category = await Category.findById(id).exec();
    //     name = name ? name : category.name;
    //     products = products ? products : category.products;
    // }

    return await Category.findByIdAndUpdate(id, { name, products }).exec();
};

const del = async (id) => await Category.findByIdAndDelete(id).exec();

module.exports = {
    create,
    del,
    update,
    getAll,
    getById,
};
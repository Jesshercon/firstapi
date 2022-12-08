const express = require("express");
const routes = express.Router();

const { create } = require("../usecases/product");

routes.get("/", (req, res) => {
    res.json(productsList);
});

routes.get("/products/:productsListid", (req, res) => {
    const product = productsList.find((product) => {

        return product.id == req.params.productsListid;
        res.json({ message: "All products" });
    });
    console.log("Product: ", product);
    if (product) {
        res.json(product);

    }
});

routes.post("/", async (req, res) => {
    //lógica para crear un producto
    const { sku, name, price } = req.body;

    try {
        const product = await create({ sku, name, price });
        const payload = { sku: product.sku, name: product.name, price: product.price };
        res.status(201).json({
            ok: true,
            payload: product
        })
    } catch (error) {

        const { message } = error;
        res.status(400).json({ ok: false, message });
    }
});

routes.put("/", (req, res) => {
    //actualizar un producto
    res.status(405).json({ message: "Method not allowed" });
});

routes.put("/:id", (req, res) => {
    //lógica para editar el producto
    res.json({ message: `Pedido con el id ${req.params.id} modificado en tu carrito` });
});

routes.delete("/:id", (req, res) => {
    //lógica para eliminar el producto
    res.json({ message: `Producto con el id ${req.params.id} eliminado de tu carrito` });
});



module.exports = routes;
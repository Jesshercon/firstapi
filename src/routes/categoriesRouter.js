// const { triggerAsyncId } = require("async_hooks");
// const { json } = require("express");
const express = require("express");
const routes = express.Router();

const {
    getAll,
    getById,
    create,
    update,
    del,
} = require("../usecases/category");
// const fs = require("fs/promises");


// const categoryUseCases = require("../usecases/category");


// const categories = [
//     { id: "technology", name: "hp-pavilion 5000", price: "$500.00" },
//     { id: "home", name: "dining table", price: "300.00" },
//     { id: "garden", name: "hose", price: "15.00" },
//     { id: "groceries", name: "vegetables", price: "10.00" },
//     { id: "technology", name: "hp mouse", price: "$20.00" },
//     { id: "technology", name: "keyboard", price: "$60.00" },
// ];
// routes.use(json());

routes.get("/", async (req, res) => {
    try {
        const categories = await getAll();
        res.json({ ok: true, payload: categories });
    } catch (error) {
        res.status(400).json({ ok: false, message: error });
    }
});
// routes.get("/", async (req, res) => {

//     try {
//         const categories = await categoryUseCases.getAll();
//         res.json({ ok: true, payload: categories });
//     } catch (error) {
//         res.status(404)({ ok: false, message: error });
//     }

// const data = JSON.parse(categories.toString);
// res.json(data);
// });

routes.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const { name, products } = await getById(id);
        res.json({
            ok: true,
            payload: { name, products, numberOfProducts: products.length },
        });
    } catch (error) {
        res.status(400).json({ ok: false, message: error });
    }
});
// routes.get("/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const { name, products } = await categoryUseCases.getById(id);
//         res.json({ ok: true, payload: { name, products } });
//     } catch (error) {
//         res.status(404)({ ok: false, message: error });
//     }
// });

routes.post("/", async (req, res) => {
    const { name } = req.body;

    try {
        const payload = await create(name);
        res.json({
            ok: true,
            message: "Category created successfully",
            payload,
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error,
        });
    }
});

// routes.post("/", async (req, res) => {

//     const { name } = req.body;


//     try {
//         const payload = await categoryUseCases.create(name);

//         res.json({ ok: true, message: "Categoría creada", payload });
//     } catch (error) {
//         res.json({ ok: false, message: error });
//     }
// });

routes.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, products } = req.body;

    try {
        const data = { name, products };
        const category = await update(id, data);
        res.json({ ok: true, payload: category });
    } catch (error) {
        const { message } = error;
        res.status(400).json({ ok: false, message });
    }
});
// routes.put("/:id", async (req, res) => {
//     //actualizar una categoría
//     const { id } = req.params;
//     const { name, products } = req.body;

//     try {
//         const category = await categoryUseCases.rename(id, { name, products });
//         res.json({ ok: true, payload: category });
//     } catch (error) {
//         const { message } = error;
//         res.status(404)({ ok: false, message });
//     }
// });

routes.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, products } = await del(id);

        res.json({ ok: true, payload: { name, products } });
    } catch (error) {
        const { message } = error;
        res.status(400).json({ ok: false, message });
    }
});
// routes.delete("/:id", async (req, res) => {
//     //lógica para eliminar categoría
//     try {
//         const { id } = req.params;
//         const { name, products } = await categoryUseCases.del(id);
//         res.json({ ok: true, payload: { name, products } });
//     } catch (error) {
//         const { message } = error;
//         res.status(400).json({ ok: false, message })
//     }
// });


module.exports = routes;
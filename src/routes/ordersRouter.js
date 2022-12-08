// const express = require("express");
// const routes = express.Router();

//El id es cada 

// const customerOrder = [
//     { id: "1111111", name: "backpack", quantity: "2" },
//     { id: "2222222", name: "lipgloss", quantity: "4" },
//     { id: "3333333", name: "pictureFrame", quantity: "1" },
// ];


// routes.get("/", (req, res) => {
//     res.json(customerOrder);
// });

// routes.get("/:customerOrderid", (req, res) => {
//     const order = customerOrder.find((order) => {

//     });
//     console.log("Product: ", order);
//     if (!order) {
//         res.json(order);

//     }
// });

//can't do
// routes.post("/", (req, res) => {
//     //lógica para crear una orden
//     res.json({ message: "Orden creada" });

// });

// routes.put("/", (req, res) => {
//     //actualizar orden
//     res.status(405).json({ message: "Method not allowed" });
// });

// routes.put("/:id", (req, res) => {
//lógica para editar el usuario
//     const order = customerOrder.find((order) => req.params.id == order.id);
//     res.json({ message: `Orden con el id ${req.params.id} modificada` });
//     if (!order) {
//         res.status(404).json({ message: "Order not found" });
//     } else {
//         res.json({ message: `Order ${order.id} modified successfully` });
//     }
// });

// routes.delete("/:id", (req, res) => {
//lógica para editar el usuario
//     const order = customerOrder.find((order) => req.params.id == order.id);
//     if (!order) {
//         res.status(404).json({ message: "Order not found" });
//     } else {
//         res.json({ message: `Order ${order.id} deleted successfully` });
//     }
// });


// module.exports = routes;


const { Router } = require("express");
const router = Router();

const orders = [
    { id: 1, products: [{}] },
    { id: 2, products: [{}] },
    { id: 3, products: [{}] },
    { id: 4, products: [{}] },
];

router.get("/", (req, res) => {
    res.json(orders);
});
router.get("/:id", (req, res) => {
    const order = orders.find((order) => req.params.id == order.id);

    if (!order) {
        res.status(404).json({ message: "Order not found" });
    } else {
        res.json(order);
    }
});
router.post("/", (req, res) => {
    res.json({ message: "Order created successfully!" });
});
router.put("/:id", (req, res) => {
    const order = orders.find((order) => req.params.id == order.id);

    if (!order) {
        res.status(404).json({ message: "Order not found" });
    } else {
        res.json({ message: `Order ${order.id} modified successfully` });
    }
});
router.delete("/:id", (req, res) => {
    const order = orders.find((order) => req.params.id == order.id);
    if (!order) {
        res.status(404).json({ message: "Order not found" });
    } else {
        res.json({ message: `Order ${order.id} deleted successfully` });
    }
});

module.exports = router;
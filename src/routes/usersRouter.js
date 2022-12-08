const { Router } = require("express");
const routes = Router();


const {
    create,
    getAll,
    // authenticate,
    getByEmail
} = require("../usecases/user");

routes.get("/", async (req, res) => {
    try {
        const users = await getAll();
        res.json({ ok: true, payload: users });
    } catch (error) {
        res.status(400).json({ ok: false, message: error });
    }
});

routes.get("/:email", async (req, res) => {
    const { email } = req.params;
    try {

        const newEmail = await getByEmail(email);

        res.json({
            ok: true,
            payload: { newEmail },
        });
    } catch (error) {
        const { message } = error;
        res.status(400).json({ ok: false, message });
    }
});


routes.post("/", async (req, res) => {
    const data = req.body;

    // Lógica para crear un usuario con los datos obtenidos

    const { username, email } = data;
    const newUser = await create(data);

    if (!data) {
        res.status(400).json({ message: "User data is required" });
    } else {
        res.status(201).json({
            ok: true,
            message: "Usuario creado",
            payload: newUser,
        });
    }
});

/////
// routes.post("/", async (req, res) => {
//     const { name } = req.body;

//     try {
//         const payload = await create(name);
//         res.json({
//             ok: true,
//             message: "Category created successfully",
//             payload,
//         });
//     } catch (error) {
//         res.status(400).json({
//             ok: false,
//             message: error,
//         });
//     }
// });




routes.put("/", (req, res) => {
    res.status(405).json({ message: "Method not allowed" });
});

routes.put("/:id", (req, res) => {
    // Lógica para editar el usuario con el id X

    res.json({ message: `Usuario con el id ${req.params.id} modificado` });
});

routes.delete("/:id", (req, res) => {
    // Logica para eliminar el usuario con el id X

    res.json({ message: `Usuario con el id ${req.params.id} eliminado` });
});

module.exports = routes;
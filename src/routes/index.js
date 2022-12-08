//index routes
const userRouter = require("./usersRouter");
const ordersRouter = require("./ordersRouter");
const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");

const apiRouter = (app) => {
    app.use("/users", userRouter);
    app.use("/orders", ordersRouter);
    app.use("/products", productsRouter);
    app.use("/categories", categoriesRouter);
};

module.exports = apiRouter;
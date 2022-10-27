"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const veicules_routes_1 = require("./veicules.routes");
const appRoutes = (app) => {
    app.use("/veicules", (0, veicules_routes_1.veiculeRoutes)());
};
exports.appRoutes = appRoutes;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const handleError = (error, req, res, _) => {
    if (error instanceof errors_1.AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    return res.status(500).json({ message: "Internal server error." });
};
exports.default = handleError;

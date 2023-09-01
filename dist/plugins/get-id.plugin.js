"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
const { v4: uuidv4 } = require("uuid");
// getUUID is a function that returns a UUID
const getUUID = () => {
    return uuidv4();
};
exports.getUUID = getUUID;

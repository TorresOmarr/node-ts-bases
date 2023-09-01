"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.logger = void 0;
const winston = require("winston");
const { combine, timestamp, json } = winston.format;
exports.logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(), json()),
    //   defaultMeta: { service: "user-service" },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});
exports.logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));
const buildLogger = (service) => {
    return {
        log: (message) => {
            exports.logger.log("info", { message, service });
        },
        error: (message) => {
            exports.logger.error("error", { message, service });
        },
    };
};
exports.buildLogger = buildLogger;

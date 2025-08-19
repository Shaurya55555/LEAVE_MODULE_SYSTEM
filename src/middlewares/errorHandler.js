export function notFound(req, res, next) {
    res.status(404).json({ message: `Not Found - ${req.originalUrl}` });
    }
    
    export function errorHandler(err, req, res, next) {
    const statusFromRes = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
    const status = err && err.name === "CastError" ? 400 : statusFromRes;
    res.status(status).json({
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
    }
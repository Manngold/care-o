import routes from "./routes";

export const localMiddleWare = (req, res, next) => {
    res.locals.routes = routes;
    next();
};

import { Router } from "express";
import { UserController } from "../../app/use-cases/user/UserController";
import { FinanceKeyController } from "../../app/use-cases/finance-key/FinanceKeyController";
import { isAuthenticated } from "../../app/utils/middlewares/isAuthenticated";

const routes = Router();

const userController = new UserController();
routes.post("/user", userController.create);
routes.post("/user/auth", userController.auth);

const financeKeyController = new FinanceKeyController();
routes.post("/key", isAuthenticated, financeKeyController.create);

export { routes };
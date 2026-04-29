"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_js_1 = require("../controllers/UserController.js");
const router = express_1.default.Router();
router.get("/", UserController_js_1.UserController.getUsers);
router.get("/:id", UserController_js_1.UserController.getUser);
router.post("/", UserController_js_1.UserController.createUser);
router.put("/:id", UserController_js_1.UserController.updateUser);
router.delete("/:id", UserController_js_1.UserController.deleteUser);
exports.default = router;

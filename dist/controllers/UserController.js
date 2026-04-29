"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_js_1 = require("../models/User.js");
class UserController {
    static getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_js_1.User.getAll();
                res.json(users);
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching users" });
            }
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params; // destructuring
                const user = yield User_js_1.User.getById(Number(id));
                res.json(user);
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching user" });
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email } = req.body; // destructuring
                const newUser = new User_js_1.User(name, email);
                const result = yield User_js_1.User.create(newUser);
                res.json({ message: "User created", result });
            }
            catch (error) {
                res.status(500).json({ message: "Error creating user" });
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email } = req.body;
                const updatedUser = new User_js_1.User(name, email);
                yield User_js_1.User.update(Number(id), updatedUser);
                res.json({ message: "User updated" });
            }
            catch (error) {
                res.status(500).json({ message: "Error updating user" });
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield User_js_1.User.delete(Number(id));
                res.json({ message: "User deleted" });
            }
            catch (error) {
                res.status(500).json({ message: "Error deleting user" });
            }
        });
    }
}
exports.UserController = UserController;

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
exports.User = void 0;
const db_js_1 = require("../config/db.js");
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    // Static: Get all users
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield db_js_1.db.query("SELECT * FROM users");
            return rows;
        });
    }
    // Static: Get by ID
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield db_js_1.db.query("SELECT * FROM users WHERE id = ?", [id]);
            return rows[0];
        });
    }
    // Static: Create user
    static create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email } = user; // destructuring
            const [result] = yield db_js_1.db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
            return result;
        });
    }
    // Static: Update user
    static update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email } = user;
            const [result] = yield db_js_1.db.query("UPDATE users SET name=?, email=? WHERE id=?", [name, email, id]);
            return result;
        });
    }
    // Static: Delete user
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db_js_1.db.query("DELETE FROM users WHERE id=?", [id]);
            return result;
        });
    }
}
exports.User = User;

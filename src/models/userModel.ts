import { db } from "../config/db";

export class User {
  id?: number;
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  // Static: Get all users
  static async getAll() {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  }

  // Static: Get by ID
  static async getById(id: number) {
    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  // Static: Create user
  static async create(user: User) {
    const { name, email } = user; // destructuring
    const [result]: any = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    return result;
  }

  // Static: Update user
  static async update(id: number, user: User) {
    const { name, email } = user;
    const [result] = await db.query(
      "UPDATE users SET name=?, email=? WHERE id=?",
      [name, email, id]
    );
    return result;
  }

  // Static: Delete user
  static async delete(id: number) {
    const [result] = await db.query(
      "DELETE FROM users WHERE id=?",
      [id]
    );
    return result;
  }
}
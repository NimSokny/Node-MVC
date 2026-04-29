import { Request, Response } from "express";
import { User } from "../models/User";

export class UserController {

  static async getUsers(req: Request, res: Response) {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  }

  static async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params; // destructuring
      const user = await User.getById(Number(id));
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user" });
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body; // destructuring

      const newUser = new User(name, email);
      const result = await User.create(newUser);

      res.json({ message: "User created", result });
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const updatedUser = new User(name, email);
      await User.update(Number(id), updatedUser);

      res.json({ message: "User updated" });
    } catch (error) {
      res.status(500).json({ message: "Error updating user" });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await User.delete(Number(id));

      res.json({ message: "User deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user" });
    }
  }
}
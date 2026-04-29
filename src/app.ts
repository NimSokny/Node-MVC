import express from "express";
import userRoutes from "./routes/UserRoutes.js";

const app = express();

app.use(express.json());

// routes
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
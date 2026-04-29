import express from "express";
import router from "./routes/UserRoutes";

const app = express();

app.use(express.json());

// routes
app.use("/users", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
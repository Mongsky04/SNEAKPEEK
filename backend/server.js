import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/caloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 5000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors({
  origin: ["https://sneakpeek-6lng.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  // FIX: Add 'token' to the allowedHeaders array
  allowedHeaders: ["Content-Type", "Authorization", "token"]
}));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server Started on PORT : " + port));
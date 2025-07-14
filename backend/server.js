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

// Increase the limit for JSON and URL-encoded bodies
// You can adjust '50mb' to whatever size you deem necessary for your application.
// If you're uploading files, ensure this limit is greater than your largest expected file.
app.use(express.json({ limit: '50mb' })); // Allow JSON bodies up to 50MB
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Allow URL-encoded bodies up to 50MB

app.use(cors({
  origin: ["https://sneakpeek-frontend.vercel.app", "https://sneakpeek-6lng.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  credentials: true
}));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server Started on PORT : " + port));
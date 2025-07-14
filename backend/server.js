import express from "express";
import cors from "cors"; // Make sure cors is imported
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

// --- THIS IS THE CRITICAL PART FOR CORS ---
app.use(cors({
  // Make sure both frontend origins are included
  origin: ["https://sneakpeek-frontend.vercel.app", "https://sneakpeek-6lng.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Add OPTIONS if not already there, for preflight requests
  allowedHeaders: ["Content-Type", "Authorization", "token"], // Make sure all custom headers your frontend sends are listed
  credentials: true // Set to true if your frontend sends cookies or HTTP authentication
}));
// ------------------------------------------

app.use("/api/user", userRouter);
app.use("/api/product", productRouter); // This includes the /list endpoint
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server Started on PORT : " + port));
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

// Connect to Database and Cloudinary
connectDB();
connectCloudinary();

// --- CRITICAL CONFIGURATIONS START HERE ---

// 1. Configure Body Parser to handle large payloads
// This is essential for the "413 Content Too Large" error.
// Set a generous limit. '50mb' is a good starting point for images.
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// 2. Configure CORS
// This is essential for the "No 'Access-Control-Allow-Origin'" error.
// Ensure ALL your frontend origins are explicitly listed.
const allowedOrigins = [
  "https://sneakpeek-frontend.vercel.app", // Your main frontend
  "https://sneakpeek-6lng.vercel.app",      // Your admin panel
  // Add other local development origins if needed, e.g., "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman or local file access)
    if (!origin) return callback(null, true);
    // Check if the requesting origin is in our allowed list
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      // Log the rejected origin for debugging
      console.error(msg);
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Explicitly list all HTTP methods used, including OPTIONS for preflight
  allowedHeaders: ["Content-Type", "Authorization", "token", "X-Requested-With", "Accept"], // Ensure all custom headers and common headers are allowed. 'token' is crucial for your case.
  credentials: true // Set to 'true' if your frontend sends cookies or Authorization headers (like JWT)
}));

// --- CRITICAL CONFIGURATIONS END HERE ---

// Define your API routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter); // This includes your /add endpoint
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

// Basic route to check if API is working
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start the server
app.listen(port, () => console.log("Server Started on PORT : " + port));
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/caloudinary.js"; // Pastikan path ini benar
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 5000;

// Koneksi ke Database dan Cloudinary
connectDB();
connectCloudinary();

// --- PENTING: Konfigurasi Body Parser dan CORS di sini ---

// 1. Konfigurasi Body Parser untuk menangani payload besar
// Ini penting untuk mengatasi error 413 (Content Too Large)
// Sesuaikan '50mb' sesuai kebutuhan Anda. Jika ada upload gambar/file besar, ini sangat krusial.
app.use(express.json({ limit: '50mb' })); // Untuk JSON body
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Untuk URL-encoded body (jika menggunakan form biasa)

// 2. Konfigurasi CORS
// Ini penting untuk mengatasi 'Access-Control-Allow-Origin' dan header 'token'
// Pastikan semua origin frontend Anda terdaftar di sini
const allowedOrigins = [
  "https://sneakpeek-frontend.vercel.app", // Frontend utama Anda
  "https://sneakpeek-6lng.vercel.app"      // Admin panel atau frontend lainnya
  // Tambahkan origin lain jika ada, contoh: "http://localhost:3000" saat development
];

app.use(cors({
  origin: function (origin, callback) {
    // Memungkinkan request tanpa origin (misal: Postman, atau dari file lokal)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Pastikan semua method HTTP yang Anda gunakan terdaftar, termasuk OPTIONS untuk preflight
  allowedHeaders: ["Content-Type", "Authorization", "token"], // Pastikan semua custom header yang dikirim frontend terdaftar, termasuk 'token'
  credentials: true // Set ke 'true' jika frontend mengirim cookies atau header otentikasi (misal JWT di header Authorization)
}));

// --- Akhir Konfigurasi ---

// Definisikan rute API Anda
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

// Rute dasar untuk mengecek apakah API berjalan
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Mulai server
app.listen(port, () => console.log("Server Started on PORT : " + port));
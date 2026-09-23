import express from "express";
import cors from "cors";

import schemeRoutes from "./routes/schemeRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import pushRoutes from "./routes/pushRoutes.js";

import aiRoutes from "./routes/aiRoutes.js";

const app = express();

// ==========================================
// MIDDLEWARE
// ==========================================

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://schemesathi-frontend.onrender.com',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// ==========================================
// ROUTES
// ==========================================

app.use("/api/schemes", schemeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/push", pushRoutes);
app.use("/api/ai", aiRoutes);

// ==========================================
// TEST ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SchemeSathi Backend API is running",
  });
});

export default app;
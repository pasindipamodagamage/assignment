import express, {Express, Request, Response} from "express";
import productRoutes from "./routes/product.routes";
import cors from "cors";
import contactRoutes from "./routes/contactDetail.routes";

// 1. Initialize the express app
const app: Express = express();

// 2. Define Middlewares

// 2.1 Instruct to parse the request payload data to be converted to JSON format
app.use(express.json());
// app.use(cors()); // Enable/Allow CORS here
const allowedOrigins = [
    "http://localhost:5173"
];
const corsOptions = {
    origin: (origin: string | undefined,
             callback: (err: Error | null,
                        allow?:boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};
app.use(cors(corsOptions)); // Enable/Allow CORS according to defined options

app.use("/api/products", productRoutes)
app.use("/api/contacts", contactRoutes);

// Expert the app to use outside (in index.ts)
export default app;
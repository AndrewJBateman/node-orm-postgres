import express from "express";
import morgan from "morgan";
import cors from "cors";
import dataRoutes from "./routes/data.routes"
import norskRoutes from "./routes/norsk.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

app.use("/data", dataRoutes)
app.use("/norsk", norskRoutes)

export default app;

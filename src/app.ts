import express from "express";
import logger from "morgan";
import * as path from "path";
import cors from 'cors';
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
import { history } from "./routes/history";
import { board } from "./routes/board";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);
app.use("/api/history", history);
app.use("/api/board", board);

app.use(errorNotFoundHandler);
app.use(errorHandler);

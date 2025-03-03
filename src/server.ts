import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes";

dotenv.config();

const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRoutes);

app.use((req, res) => {
    res.send("Página não encontrada 😕");
});

app.listen(8202, () => {
    console.log("4000");
});
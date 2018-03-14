// external modules
import express from "express";
import path from "path";
import bodyParser from "body-parser";

// custom modules
import dev from "./utils/dev";
import projectRoutes from "./routes/project-routes";
import blogRoutes from "./routes/blog-routes";
import recommendationRoutes from "./routes/recommendation-routes";
import contactFormRoutes from "./routes/contact-form-routes";
import SHARED_CONSTANTS from "../constants.js";

// pulling off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

const app = express();
app.use(bodyParser.json());
app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "../public")));

dev(app);
projectRoutes(app);
blogRoutes(app);
recommendationRoutes(app);
contactFormRoutes(app);

let port = 8081; // dev port
if (process.env.NODE_ENV != "development") {
   port = 8080; // prod port
   app.get("*", (req, res) => {
      res.render("index");
   });
}

const server = app.listen(port, () => {
   console.log(`Server started on: ${port}`);
});

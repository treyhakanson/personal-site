// custom modules
import SHARED_CONSTANTS from "../../constants.js";

// pull off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

function helloWorld(req, res) {
   res.send("Hello World!");
}

export default function(app) {
   // Only add dev routes it in dev environment
   if (process.env.NODE_ENV != "development") return;
   app.use(require("morgan")("tiny"));
   app.get(`/api/v${API_INFO.VERSION}/dev/hello-world`, helloWorld);
}

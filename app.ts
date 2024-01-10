const bodyParser = require('body-parser');
import Express from "express";
import router from "./routes/todo";
const app = Express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(router)
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
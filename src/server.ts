import { app } from ".";
import { getAllData } from "./modules/allData/getAllData";

getAllData().finally();
app.listen(3333, () => console.log("Server is running!"));

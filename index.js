import express from 'express';
const app = express();
import cors from 'cors';
import secure from 'ssl-express-www';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import apirouter from './routes/api.js'





const __dirname = dirname(fileURLToPath(import.meta.url));
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use('/api', apirouter)
app.use(express.static(path.join(__dirname, "public")));






// HOME
app.get("/", async (req, res) => {
res.sendFile(path.join(__dirname, "public/index.html"));
});


// connected
app.listen(3000, () => {
console.log("CONNECTED TO http://localhost:3000");
});

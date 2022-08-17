import express, { json } from 'express';
import { db } from "./database/db/db";
import { router } from './database/routes/routes';
const app = express();

//MIDDLEWARES
// Config JSON response
app.use(express.json());
//CONFIG ROUTES
app.use(router);


app.listen(3001, async () => {
    await db.sync();
    console.log("Servidor em funcionamento na porta 3001!");
});
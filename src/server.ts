import express from 'express';
import { router } from "./routes";
import "./database";

const app = express();


app.use(express.json());

app.get("/", (request, response) => {
	return response.json({ message: "Hello World" });
});

app.use(router)

app.listen(3333);
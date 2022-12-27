import express from 'express'
import router from "./routes/router";
import morgan from 'morgan';
import {protect} from "./auth/auth";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', protect, router);

export default app;
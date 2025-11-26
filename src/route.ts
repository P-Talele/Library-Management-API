import express from 'express';
const route = express.Router();
import Authourrouter from "./moduls/author/route";
import BookRoute from "./moduls/book/route"


route.use(Authourrouter)
route.use(BookRoute)

export default route


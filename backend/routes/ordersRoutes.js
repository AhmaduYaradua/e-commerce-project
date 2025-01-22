import express from "express";
const router = express.Router();

import { createUserOrder } from "../controllers/ordersControllers.js";

router.post("/create", createUserOrder);

export default router;

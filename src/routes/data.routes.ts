import { Router } from "express";
import { createData, getData, updateData, deleteData, getDataDetail } from "../controllers/data.controller";

const router = Router();

router.post("/data", createData);
router.get("/data", getData)
router.put("/data/:id", updateData)
router.delete("/data/:id", deleteData)
router.get("/data/:id", getDataDetail)

export default router;

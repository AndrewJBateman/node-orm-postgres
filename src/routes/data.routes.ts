import { Router } from "express";
import {
  createData,
  getData,
  updateData,
  deleteData,
  getDataDetail,
} from "../controllers/data.controller";

const router = Router();

router.post("/", createData);
router.get("/", getData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);
router.get("/:id", getDataDetail);

export default router;

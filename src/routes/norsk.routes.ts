import { Router } from "express";
import {
  createNorskData,
  getNorskData,
  updateNorskData,
  deleteNorskData,
  getNorskDataDetail,
} from "../controllers/norsk.controller";

const router = Router();

router.post("/", createNorskData);
router.get("/", getNorskData);
router.put("/:id", updateNorskData);
router.delete("/:id", deleteNorskData);
router.get("/:id", getNorskDataDetail);

export default router;

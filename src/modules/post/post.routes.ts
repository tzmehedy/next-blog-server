import { Router } from "express";
import { postControllers } from "./post.controllers";

const router = Router();

router.get("/", postControllers.getAllPost);
router.get("/:id", postControllers.getPostById);
router.post("/create", postControllers.createPost);
router.patch("/update", postControllers.updatePost);
router.delete("/delete", postControllers.deletePost);

export const postRoutes = router;

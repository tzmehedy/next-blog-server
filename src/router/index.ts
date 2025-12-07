import { Router } from "express";
import { postRoutes } from "../modules/post/post.routes";
import { userRoutes } from "../modules/user/user.routes";

export const router = Router()

router.use("/user", userRoutes)
router.use("/post", postRoutes)



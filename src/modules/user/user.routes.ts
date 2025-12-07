import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router()

router.get("/", userControllers.getAllUser)
router.get("/:id", userControllers.getUserById)
router.post("/create", userControllers.createUser)
router.patch("/update-user-info/:id", userControllers.updateUserInfo)
router.delete("/delete/:id", userControllers.deleteUser)


export const userRoutes = router
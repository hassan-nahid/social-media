import { getSingleUser, loginUser, updateUserProfile } from "../Controllers/userController.js";
import express from "express"
import { upload } from "../middlewares/multerConfig.js";
import userVerify from "../middlewares/userVerify.js";

const userRoute = express.Router();

userRoute.post("/login", loginUser)
userRoute.put("/update-profile", userVerify, upload.single('profileImage'), updateUserProfile)
userRoute.get("/:userId",userVerify,getSingleUser)

export default userRoute;

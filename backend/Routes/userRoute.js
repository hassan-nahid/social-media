import { followUser, getAllUsers, getFollowers, getFollowing, getSingleUser, loginUser, removeFriend, unfollowUser, updateUserProfile } from "../Controllers/userController.js";
import express from "express"
import { upload } from "../middlewares/multerConfig.js";
import userVerify from "../middlewares/userVerify.js";

const userRoute = express.Router();

userRoute.post("/login", loginUser)
userRoute.get("/allUser", userVerify, getAllUsers);
userRoute.put("/update-profile", userVerify, upload.single('profileImage'), updateUserProfile)
userRoute.post("/follow", userVerify, followUser)
userRoute.post("/unfollow", userVerify, unfollowUser)
userRoute.post("/remove", userVerify, removeFriend)
userRoute.get("/:userId", userVerify, getSingleUser)
userRoute.get("/followers/:userId",userVerify,getFollowers)
userRoute.get("/following/:userId",userVerify,getFollowing)


export default userRoute;

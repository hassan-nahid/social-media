import User from "../Models/userModel.js";
import { uploadToCloudinary } from "../utils/claudinaryImageUpload.js";
import generateToken from "../utils/generateToken.js";

export const loginUser = async (req, res) => {
  try {
    const { uid, name, userName, email } = req.body;

    if (!email || !uid || !name || !userName) {
      return res.status(400).json({ message: "Invalid required fields" });
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ uid, name, userName, email });
      const token = generateToken(user.uid);
      return res.status(200).json({
        message: "User created successfully",
        user,
        token,
      });
    } else {
      const token = generateToken(user._id);
      return res.status(200).json({
        message: "User login successful",
        user,
        token,
      });
    }

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const updateUserProfile = async (req, res) => {
  try {
    const {
      uid,
      name,
      userName,
      bio,
      worksAt,
      studiedAt,
      livesIn,
      from,
      relationship,
      image, // Frontend sends image (as base64 or URL)
    } = req.body;



    const user = await User.findOne({ uid: uid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Upload image if a new image is sent
    let uploadedImageUrl = user.image; // Default to the current image
    if (image && image.startsWith("data:image")) {
      // If a new image is provided as a base64 string, upload it to Cloudinary
      uploadedImageUrl = await uploadToCloudinary(image);
    }

    // Update fields
    user.name = name || user.name;
    user.userName = userName || user.userName;
    user.bio = bio || user.bio;
    user.worksAt = worksAt || user.worksAt;
    user.studiedAt = studiedAt || user.studiedAt;
    user.livesIn = livesIn || user.livesIn;
    user.from = from || user.from;
    user.relationship = relationship || user.relationship;
    user.image = uploadedImageUrl; // Updated image URL

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    // ✅ Handle duplicate key error (like userName or email conflict)
    if (error.name === "MongoServerError" && error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ message: `${field} already exists` });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const getSingleUser = async (req, res) => {
  const { userId } = req.params;


  try {
    const user = await User.findOne({ uid: userId }); // find by uid

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


export const followUser = async (req, res) => {
  const { userId, targetUserId } = req.body;

  if (userId === targetUserId) {
    return res.status(400).json({ message: "You can't follow yourself" });
  }

  try {
    // Add to followers
    await User.findByIdAndUpdate(targetUserId, {
      $addToSet: { followers: userId }
    });

    // Add to following
    await User.findByIdAndUpdate(userId, {
      $addToSet: { following: targetUserId }
    });

    res.json({ message: "Followed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const unfollowUser = async (req, res) => {
  const { userId, targetUserId } = req.body;

  try {
    // Remove from followers
    await User.findByIdAndUpdate(targetUserId, {
      $pull: { followers: userId }
    });

    // Remove from following
    await User.findByIdAndUpdate(userId, {
      $pull: { following: targetUserId }
    });

    res.json({ message: "Unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const removeFriend = async (req, res) => {
  const { userId, targetUserId } = req.body;

  if (userId === targetUserId) {
    return res.status(400).json({ message: "You can't remove yourself" });
  }

  try {
    // Just add target user to removedUsers array
    await User.findByIdAndUpdate(userId, {
      $addToSet: { removedUsers: targetUserId }
    });

    res.json({ message: "User removed (hidden) from friend list successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getFollowers = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate({
      path: "followers",
      select: "_id name userName image"
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      followers: user.followers
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFollowing = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate({
      path: "following",
      select: "_id name userName image"
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      following: user.following
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

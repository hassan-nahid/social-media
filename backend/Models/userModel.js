import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, default: null },
  bio: { type: String, default: null },
  isVerifed: { type: Boolean, default: false },
  worksAt: { type: String, default: null },
  studiedAt: { type: String, default: null },
  livesIn: { type: String, default: null },
  from: { type: String, default: null },
  relationship: {
    type: String,
    enum: ["Single", "In a Relationship", "Married", "Complicated"],
    default: "Single"
  },
  // 🔥 New social fields
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  removedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;

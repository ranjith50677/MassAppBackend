import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      default:"https://res.cloudinary.com/demxjipir/image/upload/v1690887105/Profile%20Images%20Mass_APP/bfihpwhhbhyiytmhj36b.jpg",
    },
    lastSeen: {
      type: Date,
      default: Date.now,
    },
    password: {
      type: String,
      required: true,
    },
    isOwner: {
      type: Boolean,
      default: false,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    following:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    followers:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
  },
  {
    timestamps: true, // timestamps: true adds createdAt and updatedAt fields automatically to the schema object
  }
);

export default mongoose.model("User", userSchema);

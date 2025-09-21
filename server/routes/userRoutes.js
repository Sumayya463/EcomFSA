import express from "express";
import User from "../models/User.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

/**
 * @desc Get user profile
 * @route GET /api/users/profile
 * @access Private
 */
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/**
 * @desc Update user profile
 * @route PUT /api/users/profile
 * @access Private
 */
router.put("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password; // hashed automatically in model
      }

      const updatedUser = await user.save();

      res.json({
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});



//get all users(admin only)
router.get("/", protect, admin, async (req, res) => {
    try{
        const users = await User.find({});
        res.json(users);
    }catch (err){
        res.status(500).json ({  message :"Server error", error :err.message});
    }
});

//delete user by id (admin only)
router.delete("/:id", protect, admin, async (req, res)=> {
    try{
        const user = await User.findById(req.params.id);

        if(user){
            await user.deleteOne();
            res.json({message : "User removed"});
        } else{
            res.status(404).json({message : "User not found"});
        }
    } catch (err){
        res.status(500).json({message: "Server error ", error:err.message});
    }
});

//update user role (admin only)
router.put("/:id/role", protect, admin, async (req, res) => {
  try {
    const { isAdmin } = req.body; // true or false
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isAdmin = isAdmin;
    await user.save();

    res.json({
      message: "User role updated",
      user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
export default router;

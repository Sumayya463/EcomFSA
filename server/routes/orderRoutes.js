import express from "express";
import Order from "../models/Order.js";
import { protect, admin } from "../middleware/auth.js";
import sendEmail from "../utils/sendEmails.js";
import User from "../models/User.js";

const router = express.Router();

// Create new order
router.post("/", protect, async (req, res) => {
  try {
    const { products, totalAmount , shippingAddress} = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const order = new Order({
        user: req.user.id, // from token
        products: req.body.products,
        totalAmount: req.body.totalAmount,
        status: req.body.status || "pending",
        shippingAddress: req.body.shippingAddress
    });

    const createdOrder = await order.save();

    const user = await User.findById(req.user.id);

    await sendEmail({
      to: user.email,  // email from logged-in user
      subject: "Order Confirmation",
      text: `Thank you for your order! Order ID: ${createdOrder._id}`,
      html: `<h2>Thank you for your order</h2>
             <p>Your order ID is <b>${createdOrder._id}</b></p>`,
    });

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Get logged-in user's orders
router.get("/myorders", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("products.product", "name price");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Admin: Get all orders
router.get("/allorders", protect,admin, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(401).json({ message: "Not authorized" });
    }
    const orders = await Order.find().populate("user", "name email")
                          .populate("products.product", "name price");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // if customer, only allow their own order
    if (!req.user.isAdmin && order.user._id.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to view this order" });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.put("/:id/status", protect, admin, async (req, res) => {
  const { status } = req.body;

  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status || order.status;
    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Admin: Delete order
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.remove();
    res.json({ message: "Order removed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});




export default router;

const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

// TEST ADMIN ROUTE
router.get("/dashboard", protect, adminOnly, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin Dashboard",
    admin: req.user,
  });
});

module.exports = router;

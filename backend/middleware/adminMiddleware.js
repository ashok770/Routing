const adminOnly = (req, res, next) => {
  try {
    // protect middleware already attached req.user
    if (req.user && req.user.role === "admin") {
      next();
    } else {
      return res.status(403).json({
        message: "Access denied. Admin only.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Server error in admin middleware",
    });
  }
};

module.exports = adminOnly;

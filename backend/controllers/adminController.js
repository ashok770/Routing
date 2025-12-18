exports.adminDashboard = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin Dashboard",
    admin: req.user,
  });
};

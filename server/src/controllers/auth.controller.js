import jwt from "jsonwebtoken";

// ADMIN LOGIN
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const expectedUsername = process.env.ADMIN_USERNAME || "admin";
    const expectedPassword = process.env.ADMIN_PASSWORD || "estate2025";
    const jwtSecret = process.env.JWT_SECRET || "the_estate_jwt_secret_dev_key";

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
    }

    if (username !== expectedUsername || password !== expectedPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid admin credentials.",
      });
    }

    // Generate JWT (valid for 24 hours)
    const token = jwt.sign(
      { role: "admin", username },
      jwtSecret,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      success: true,
      message: "Authentication successful.",
      token,
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during authentication.",
    });
  }
};

// VERIFY TOKEN
export const verifyAuth = async (req, res) => {
  return res.status(200).json({
    success: true,
    valid: true,
    admin: req.admin,
  });
};

const loginAttempts = new Map();

export const rateLimitLogin = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  const attempt = loginAttempts.get(ip) || { count: 0, time: now };

  if (now - attempt.time > 60000) {
    loginAttempts.set(ip, { count: 1, time: now });
    return next();
  }

  if (attempt.count >= 5) {
    return res
      .status(429)
      .json({ message: "Too many login attempts. Try again later." });
  }

  attempt.count++;
  loginAttempts.set(ip, attempt);
  next();
};

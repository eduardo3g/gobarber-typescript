export default {
  jwt: {
    secret: process.env.APP_SECRET || '4WdhQKYmDoNAHe9AVNpSXI2Kp7jXKb9c',
    expiresIn: process.env.APP_SECRET_EXPIRATION || '1d',
  },
};

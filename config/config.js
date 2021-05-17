const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://admin:admin123@cluster0.qmd5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}

export default config

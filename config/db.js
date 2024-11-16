const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI || "your-default-uri-here";

    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 15000, // Increase timeout to 15 seconds
      connectTimeoutMS: 15000, // Increase timeout to 15 seconds
      socketTimeoutMS: 30000, // Increase socket timeout to 30 seconds
      retryWrites: true,
      maxPoolSize: 10,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    setTimeout(connectDB, 5000); // Retry connection after 5 seconds
  }
};

module.exports = connectDB;

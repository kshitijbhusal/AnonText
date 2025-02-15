import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/anon_text");
    console.log("db connected.");
  } catch (error) {
    console.log("db connection failed.", error);
  }
};

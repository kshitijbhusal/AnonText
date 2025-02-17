import mongoose from "mongoose";

export const dbConnect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("db already connected.");
    return;
  }

  if (connectionState === 2) {
    console.log("db connecting.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      dbName: "anon_text",
      bufferCommands: true,
    });
    console.log("db connected.");
  } catch (error) {
    console.log("db connection failed.", error);
  }
};

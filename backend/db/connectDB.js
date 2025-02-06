import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected to ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); //? 1 status code is Failure, 0 status code is success
  }
};

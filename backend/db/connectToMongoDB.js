import mongoose from "mongoose"

const connectToMongodb = async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log("connected to mongodb");
  } catch (error) {
    console.log("Erorr connectig to mongodb", error.message);
  }
}

export default connectToMongodb




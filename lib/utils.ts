import { type ClassValue, clsx } from "clsx"
import mongoose from "mongoose"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const connectToDatabase = async () => {
  try{
    if(mongoose.connections && mongoose.connections[0].readyState){
      return
    }
    const {connection} = await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "LinkTree"
    })
    console.log("Db Connected")
  } catch(e){
    throw new Error("Error connecting to db")
  }
}
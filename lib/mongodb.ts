import mongoose from "mongoose";

const Mongodb_uri = "mongodb://localhost:27017/openagents";

if (!Mongodb_uri) {
    throw new Error("Error in MongoDB uri");
}

export async function connectToMongoDB() {
    try {
        await mongoose.connect(Mongodb_uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // You can handle the error here, such as logging it or throwing a custom error
        throw new Error('Failed to connect to MongoDB');
    }
}

import mongoose from 'mongoose'

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(`mongodb://localhost:27017/Car-Doctor-Pro`)
        console.log('Successfully connect MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

export default dbConnect;
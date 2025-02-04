import mongoose, { Schema, Document } from "mongoose"

interface IUser extends Document {
    name: string;
    email: string;
    role: string;
    password: string
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
})

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema)

export default User;


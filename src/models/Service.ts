import mongoose, { Schema, Document } from "mongoose";

// Interface for the Service model
interface IService extends Document {
    service_id: string;
    title: string;
    img: string;
    price: string;
    description: string;
    facility: {
        name: string;
        details: string;
    }[];
}

// Define the schema for the Service model
const serviceSchema = new Schema<IService>({
    service_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    facility: [
        {
            name: {
                type: String,
                required: true,
            },
            details: {
                type: String,
                required: true,
            },
        },
    ],
});

const Service = mongoose.models.Service || mongoose.model<IService>("Service", serviceSchema);

export default Service;

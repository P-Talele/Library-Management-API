import { Schema, model, Document } from "mongoose";

interface authorI extends Document {
    name: string,
    mobile: number,
    email: string,
}

const AuthorSchema = new Schema<authorI>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        mobile: {
            type: Number,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
    },
    { timestamps: true }
);

export const authorModel = model<authorI>("Author", AuthorSchema);

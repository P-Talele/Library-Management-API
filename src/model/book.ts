import { Schema, model, Types, Document } from "mongoose";

interface IBook extends Document {
    title: string;
    author: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const BookSchema = new Schema<IBook>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: Types.ObjectId,
            ref: "Author",
            required: true,
        },
    },
    { timestamps: true }
);

export const BookModel = model<IBook>("Book", BookSchema);

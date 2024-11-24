import { RegisterData } from '@interfaces/registerData.interface';
import { Schema, Types } from 'mongoose';

export interface IUser extends RegisterData {
    _id: Types.ObjectId;
}

export const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        min: 3,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    }
},
    {
        timestamps: true,
        versionKey: false
    });




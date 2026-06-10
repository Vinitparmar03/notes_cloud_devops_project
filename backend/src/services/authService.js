import dynamodb from "../config/dynamodb.js";

import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const USERS_TABLE = process.env.USERS_TABLE;

const findUserByEmail = async (email) => {
    const data = await dynamodb.send(
        new ScanCommand({
            TableName: USERS_TABLE,
            FilterExpression: "email=:email",
            ExpressionAttributeValues: {
                ":email": email,
            },
        }),
    );


    return data.Items?.[0];
};

export const registerUser = async (name, email, password) => {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User(name, email, hashPassword);

    await dynamodb.send(
        new PutCommand({
            TableName: USERS_TABLE,
            Item: user,
        }),
    );

    return {
        userId: user.userId,
        name: user.name,
        email: user.email,
    };
};

export const loginUser = async (email, password) => {
    const user = await findUserByEmail(email);

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        },
    );

    return {
        token,
        user: {
            userId: user.userId,
            name: user.name,
            email: user.email,
        },
    };
};

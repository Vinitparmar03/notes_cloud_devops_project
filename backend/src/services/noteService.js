import dynamodb from "../config/dynamodb.js";
import {
    PutCommand,
    ScanCommand,
    GetCommand,
    UpdateCommand,
    DeleteCommand,
    QueryCommand,
} from "@aws-sdk/lib-dynamodb";
import Note from "../models/notesModel.js";

const TABLE_NAME = process.env.DYNAMODB_TABLE;

const createNote = async (userId, title, content) => {
    const note = new Note(userId, title, content);
    await dynamodb.send(
        new PutCommand({
            TableName: TABLE_NAME,
            Item: note,
        }),
    );


    return note;
};

const getUserNotes = async (
    userId
) => {
    const result = await dynamodb.send(
        new QueryCommand({
            TableName: TABLE_NAME,

            KeyConditionExpression:
                "userId = :userId",

            ExpressionAttributeValues: {
                ":userId": userId
            }
        })
    );

    return result.Items || [];
};

const getNoteById = async (
    userId,
    noteId
) => {
    const result = await dynamodb.send(
        new GetCommand({
            TableName: TABLE_NAME,

            Key: {
                userId,
                noteId
            }
        })
    );

    return result.Item;
};

const updateNote = async (
    userId,
    noteId,
    title,
    content
) => {
    const result = await dynamodb.send(
        new UpdateCommand({
            TableName: TABLE_NAME,

            Key: {
                userId,
                noteId
            },

            UpdateExpression:
                "SET title = :title, content = :content, updatedAt = :updatedAt",

            ExpressionAttributeValues: {
                ":title": title,
                ":content": content,
                ":updatedAt":
                    new Date().toISOString()
            },

            ReturnValues: "ALL_NEW"
        })
    );

    return result.Attributes;
};

const deleteNote = async (
    userId,
    noteId
) => {
    await dynamodb.send(
        new DeleteCommand({
            TableName: TABLE_NAME,

            Key: {
                userId,
                noteId
            }
        })
    );

    return true;
};

export { createNote, getUserNotes, getNoteById, updateNote, deleteNote };

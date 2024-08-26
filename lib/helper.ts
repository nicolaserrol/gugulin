import ObjectId from "bson-objectid";
export const getObjectId = () => ObjectId().toHexString();
export const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
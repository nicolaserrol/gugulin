import ObjectId from "bson-objectid";
export const getObjectId = () => ObjectId().toHexString();
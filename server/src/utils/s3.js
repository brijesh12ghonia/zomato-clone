import { S3 } from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3Bucket = new S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  region: "ap-south-1",
});

export const s3Upload = async (files) => {
  const params = files.map(file => {
    return {
      Bucket: process.env.BUCKET_NAME,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };
  });

  return await Promise.all(params.map(param => s3Bucket.upload(param).promise()));
};

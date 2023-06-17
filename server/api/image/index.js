import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import { ImageModel } from "../../database/allModels";
import { validateId } from "../../validation/common.validation";
import { s3Upload } from "../../utils/s3";

const Router = express.Router();

// multer configure
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

Router.use((error, req, res, next) => {
  const message = `this is unexpected field -> "${error.field}"`;
  console.log(message);
  return res.status(500).send(message);

});
/**
 * Route     /:_id
 * Des       Get image details
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);
    const images = await ImageModel.findById(_id);

    return res.json({ images });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route     /
 * Des       Upload given image to s3 bucket and save file link to mongoDB
 * Params    none
 * Access    Public
 * Method    POST
 */

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const files = req.file;

    const bucketOptions = {
      Bucket: "zomato-clone-brijesh",
      Key: files.originalname,
      Body: files.buffer,
      ContentType: files.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    const dbUpload = await ImageModel.create({
      images: [
        {
          location: uploadImage.Location,
        }
      ]
    });

    return res.status(200).json({ dbUpload });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
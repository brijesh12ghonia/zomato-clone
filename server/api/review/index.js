import express from "express";
import passport from "passport";
import { ReviewModel } from "../../database/allModels";
import { validateReviewData, validateId } from "../../validation/common.validation";

const Router = express.Router();

/**
 * Route     /:resId
 * Des       Get all review for a particular restaurant
 * Params    resId
 * Access    Public
 * Method    GET
 */

Router.get("/:resId", async (req, res) => {
  try {
    const { resId } = req.params;
    await validateId(req.params);

    const reviews = await ReviewModel.find({ restaurants: resId }).sort({
      createdAt: -1,
    });

    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route     /new
 * Des       Add new food/restaurant review and rating
 * Params    none
 * Access    Private
 * Method    POST
 */

Router.post("/new", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const { _id } = req.user;
    const { reviewData } = req.body;
    await validateReviewData(req.body);

    const review = await ReviewModel.create({ ...reviewData, user: _id });

    return res.json({ review });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route     /delete/:id
 * Des       Delete a specific review
 * Params    _id
 * Access    Private
 * Method    DELETE
 */

Router.delete("/delete/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const { id } = req.params;
    await validateId(req.params);

    const { user } = req;

    const data = await ReviewModel.findOneAndDelete({
      _id: id,
      user: user._id,
    });

    if (!data) {
      return res.status(404).json({
        message: "Review was deleted",
      });
    }

    return res.json({
      message: "Successfully deleted the review.",
      data
    });
    return res.json({ review });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

export default Router;
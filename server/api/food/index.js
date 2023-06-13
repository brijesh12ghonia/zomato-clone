import express from "express";

import { FoodModel } from "../../database/food";

const Router = express.Router();

/**
 * Route    /:_id
 * des      Get food based on id
 * params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.findById(_id);
    return res.json({ foods });

  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /r/:_id
 * des      Get all food based on particular restaurant
 * params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.find({
      restaurant: _id
    });
    return res.json({ foods });

  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /c/:category
 * des      Get all food based on particular category
 * params   category
 * Access   Public
 * Method   GET
 */

Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" }
    });

    if (!foods) {
      return res.status(404).json({
        error: `No Foods matched with ${category}`,
      })
    }
    return res.json({ foods });

  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

export default Router;
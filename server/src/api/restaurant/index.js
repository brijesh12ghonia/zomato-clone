import express from "express";

import { RestaurantModel } from "../../database/allModels";
import { validateId, validateRestaurantCity, validateSearchString } from "../../validation/common.validation";

const Router = express.Router();

/**
 * Route    /
 * des      Get all the restaurant details based on the city
 * params   none
 * Access   Public
 * Method   GET
 */

Router.get("/", async (req, res) => {
  try {
    //http://localhost:4000/restaurant/?city=ncr
    const { city } = req.query;
    await validateRestaurantCity(req.query);

    const restaurants = await RestaurantModel.findById({ city });

    if (!restaurants) {
      res.status(404).json({
        message: "No restaurant found in this city",
      });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /:_id
 * des      Get individual restaurant details based on ID
 * params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);

    const restaurants = await RestaurantModel.findById(_id);

    if (!restaurants) {
      return res.status(404).json({
        message: "No restaurant found"
      });
    };

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /search/:searchString
 * des      Get restaurants details based on search string
 * params   searchString
 * Access   Public
 * Method   GET
 */

Router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;
    await validateSearchString(req.params);
    
    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });

    if (!restaurants) {
      res.status(404).json({
        message: `No restaurants matched with ${searchString}`
      });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});



export default Router;

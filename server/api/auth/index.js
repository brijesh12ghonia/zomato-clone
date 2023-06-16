import express from "express";

import { UserModel } from "../../database/allModels";
import { validateLogin, validateSignup } from "../../validation/auth.validation";

const Router = express.Router();

/**
 * Route     /signup
 * Des       Create new account
 * Params    none
 * Access    Public
 * Method    POST
 */

Router.post("/signup", async (req, res) => {
  try {
    await validateSignup(req.body.credentials);
    await UserModel.findByEmailAndPhone(req.body.credentials);

    const newUser = await UserModel.create(req.body.credentials);
    const token = await newUser.generateJwtToken();
    return res.status(200).json({
      token,
      status: "success"
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});

/**
 * Route     /login
 * Des       Login to existing account
 * Params    none
 * Access    Public
 * Method    POST
 */

Router.post("/login", async (req, res) => {
  try {
    await validateLogin(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken();
    return res.status(200).json({
      token,
      status: "success"
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});

export default Router;
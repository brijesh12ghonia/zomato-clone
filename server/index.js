import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";


//private routes authorization configuration
import privateRouteConfig from "./config/route.config";

//database connection
import ConnectDB from "./database/connection";

import Auth from "./api/auth";
import Food from "./api/food";
import Restaurant from "./api/restaurant";
import User from "./api/user";
import Menu from "./api/menu";
import Order from "./api/order";
import Review from "./api/review";

dotenv.config();

privateRouteConfig(passport);

const zomato = express();

zomato.use(express.json());
zomato.use(session({ secret: process.env.JWT_SECRET_KEY }));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get('/', (req, res) => {
    res.json({
        message: "Server is running"
    })
});

// /auth/signup
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/review", Review);

const PORT = 4000;

zomato.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is running!!");
        })
        .catch((error) => {
            console.log("Server is running, but database connection failed..");
            console.log(error);
        });
})
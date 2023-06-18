import JwtPassport from "passport-jwt";
import dotenv from "dotenv";

import { UserModel } from "../database/allModels";

dotenv.config();

const JwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

export default (passport) => {
  passport.use(
    new JwtStrategy(options, async (jwt__payload, done) => {
      try {
        const doesUserExist = await UserModel.findById(jwt__payload.user);
        if (!doesUserExist) {
          return done(null, false);
        }
        return done(null, doesUserExist);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};
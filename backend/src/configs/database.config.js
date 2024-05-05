"use strict";
require("dotenv").config()
const databaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | GENERAL: PORT
  |--------------------------------------------------------------------------
  */
  port: 7000,
  /*
  |--------------------------------------------------------------------------
  | DATABASE
  |--------------------------------------------------------------------------
  */
  url:process.env.MONGO_URI,
};

module.exports = databaseConfig;

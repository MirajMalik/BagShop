const dotenv = require('dotenv');
dotenv.config();


if(!process.env.MONGO_URI) {
    throw new Error('Missing required environment variables');
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    PORT:  process.env.PORT
};

module.exports = config;
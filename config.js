const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "sL0WnIwL#a7Ab0Nz3Oay8zPkVjvxw-eSurdpReiQO79i9hOrO9rM",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/7f0d7a04a30a602307e3d.jpg",
SUDO_NB: process.env.SUDO_NB || "94715922193",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "true"
};

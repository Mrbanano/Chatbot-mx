require('dotenv').config();
const request = require('request');

exports.callSendAPI = (requestBody) => {
    const url = "https://graph.facebook.com/v3.3/me/messages"
    request(
        {
            uri: url,
            qs: {
                access_token: process.env.ACESS_TOKEN,
            },
            method: "POST",
            json: requestBody
        }, (error, body) => {
            if (!error) {
                console.log("Peticion enviada", body);
            } else {
                console.error("no se pudo realizar la peticion", error);
            }
        }
    );
}

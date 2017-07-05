const axios = require("axios");

module.exports.facebookAuthVerify = ({ userId, accessToken }) => new Promise((res, rej) => {
  return axios({
    url: `https://graph.facebook.com/v2.9/${userId}`,
    method: "GET",
    headers: {
      "Accepts":      "application/json",
      "Content-Type": "application/json"
    },
    params: {
      access_token: accessToken,
      fields:       "id,email"
    }
  })
  .then(res)
  .catch(rej);
});

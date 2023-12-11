const { default: axios } = require("axios");
const { auth_url } = require("../../constants/server");

const auth = (username, password) => {
    return new Promise((resolve, reject) => {
        axios.post(`${auth_url}/login`, {
            username,
            password
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })
}
module.exports = { auth }
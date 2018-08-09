const http = require("http");
const url = require("./url");
function fetchPage() {
    console.log("fetch page");
    http.get({ host: url.host[2], path: "/?delay=2000" }, (res) => {
        console.log("data returned from requesting page")
    }).on("error", (e) => {
        console.log("There was an error: " + e)
    })
}
function fetchApi() {
    console.log("fetch api")
    http.get({ host: url.host[2], path: "/?delay=2000" }, (err) => {
        console.log("data returned from the api")
    }).on("error", (err) => {
        console.log("There was an error" + e);
    })
}

fetchPage();
fetchApi();
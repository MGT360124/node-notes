let http = require("http"),
urls = ["shapeshed.com","www.bbc.co.uk","edition.cnn.com"];
function fetchPage(url){
    let start = new Date();
    http.get({host:url},(res) => {
        console.log("get reponse from: "+ url);
        console.log("----------------------------------")
        console.log("request took: " ,res, "ms")
    })
}
for (var i=0;i<urls.length;i++){
    fetchPage(urls[i]);
}
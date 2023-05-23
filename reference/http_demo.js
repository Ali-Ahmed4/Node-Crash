const http = require("http")



http.createServer((req, res) => {

    res.write("ahoy there");
    res.end()
}).listen(5000, () => console.log("its working I believe"))



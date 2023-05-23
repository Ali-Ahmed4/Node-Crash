const url = require("url")

const myUrl =  new URL("http://mywebsite.com:8080/hello.html?id=100&status=active")

myUrl.searchParams.append("user","admin");
console.log(myUrl.searchParams)


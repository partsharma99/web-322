const express = require("express");
const app = express();

const HTTP_PORT = process.env.PORT || 8989;

//call this function after the http server starts listening for requests

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

// setup the static folder that static resources can load from
// like images, css files, etc.
app.use(express.static("static"));

//setup a route on the 'root' of the url
//IE: http://localhost:8080/
app.get("/", (req, res) => {
    res.send("<h1>Welcome http server listening on: " + HTTP_PORT);
});

//now add a route for the /headers page

app.get("/headers", (req, res) => {
    const headers = req.headers;
    res.send(headers);
});

// This use() will not allow requests to go beyond it
// so we place it at the end of the file, after the other routes.
// This function will catch all other requests that don't match
// any other route handlers declared before it.
// This means we can use it as a sort of 'catch all' when no route match is found.
// We use this function to handle 404 requests to pages that are not found.
app.use((req, res) => {
    res.status(404).send("Page Not Found");
  });

// listen on port 8080\. The default port for http is 80, https is 443\. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);
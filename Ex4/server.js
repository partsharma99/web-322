const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const { stringify } = require("querystring");

const HTTP_PORT = process.env.PORT || 8080;

//call this function afterthe http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on : " + HTTP_PORT);
}

//multer requires a few options to be setup to store files with file extensions
//by default it won't store extensions for security reasons
const storage = multer.diskStorage({
    destination: "./public/photos",
    filename: function(req, file, cb){
        /*
        We write the filename as the current date down to the millisecond
        in a large web service this would possibly cause a problem if 2 people 
        uploaded an image at the exact same time. A better way would be to use GUID.s for filename
        this is a simple example
        */
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

//Tell multer to use the diskStorage function for naming files instead of default 
const upload = multer({storage : storage});

//Now we need to setup a static folder to serve the photos from when the browser requests them,
//setup a get and post route and tell the app to listen for requests

//setup the static folder that static resources can load from
//we ned this do that the photo can be loaded from the server
//by the browser after sending it

app.use(express.static("./public/"));

//If we are jus processing simple text data, we can use the "express.urlencoded" middleware to handle regular text submissions and access the data on req.body
app.use(express.urlencoded({ extended: true }));

//setup a route on the 'root' of the url that has our form
//IE: http://localhots/

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/registerUser.html"));
});

//now add a route that we can POST the form data to
//IE: http://localhost/register-user
//add  the middleware function (upload.single("photo")) for multer to process the file upload in the form
//the string you pass the single() function is the value of the
//'name' attribute on the form for the file input element

// app.post("/register-user", upload.single("photo"), (req, res) => {
//     res.send("register");
// });

app.post("/register-user", upload.single("photo"), (req, res) => {
    const formData = req.body;
    const formFile = req.file;
  
    const dataReceived = "Your submission was received:<br/><br/>" +
      "Your form data was:<br/>" + JSON.stringify(formData) + "<br/><br/>" +
      "Your File data was:<br/>" + JSON.stringify(formFile) +
      "<br/><p>This is the image you sent:<br/><img src='/photos/" + formFile.filename + "'/>";
    res.send(dataReceived);
  });

app.listen(HTTP_PORT, onHttpStart);
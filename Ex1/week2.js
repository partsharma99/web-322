
var path = require("path");
var express = require("express");
const exphbs = require('express-handlebars');
var app = express();

//The following lines will tell the server that any file with the ".hbs" extension will use the handlebars engine
app.engine('.hbs', exphbs.engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');

var HTTP_PORT = process.env.PORT || 8080;

//call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on: "+ HTTP_PORT);
}
//setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req, res){
    res.send("Hello World<br /><a href='/about'>Go to the about page</a>");
});

//setup another route to listen on /about
// app.get("/about", function(req, res){
//     res.send("<h3>About</h3>")
// });
app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/getData", function(req, res){
    var someData = {
        name : "John",
        age: 23,
        occupation: "developer",
        company: "Scotiabank"
    };
    //This returns a JSON formatted String
    res.json(someData);
});

//In case we wanna return a valid HTML5 page to the client that actually references some data stored
//on the server, we build out a string that contains both HTML code and values
// app.get("/viewData", function(req,res){

//     var someData = {
//         name: "John",
//         age: 23,
//         occupation: "developer",
//         company: "Scotiabank"
//     };

//     var htmlString = "<!doctype html>" + 
//                     "<html>" +
//                         "<head>" + 
//                             "<title>" + "View Data" + "</title>" +
//                         "</head>" +
//                         "<body>" + 
//                             "<table border='1'>" + 
//                                 "<tr>" + 
//                                     "<th>" + "Name" + "</th>" + 
//                                     "<th>" + "Age" + "</th>" + 
//                                     "<th>" + "Occupation" + "</th>" + 
//                                     "<th>" + "Company" + "</th>" + 
//                                 "</tr>" + 
//                                 "<tr>" + 
//                                     "<td>" + someData.name + "</td>" + 
//                                     "<td>" + someData.age + "</td>" + 
//                                     "<td>" + someData.occupation + "</td>" + 
//                                     "<td>" + someData.company + "</td>" + 
//                                 "</tr>" + 
//                             "</table>" + 
//                         "</body>" + 
//                     "</html>";

//     res.send(htmlString);
// });

app.get("/viewData", function(req,res){

    var someData = {
        name: "John",
        age: 23,
        occupation: "developer",
        company: "Scotiabank",
        //The if helper in handlebars works by looking at variable passed into its "context" argument
        //and if it holds true, render the block
        visible: true,
        //The "unless" helper in handlebars file renders a blovk if the "context" variable holds false
        contract: false
    };
    //renders the handlebars file with the data
    res.render('viewData', {
        data: someData,
        layout: false //do not use the default Layout (main.hbs)
    })
});

app.get("/viewData2", function(req,res){

    var someData = [{
        name: "John",
        age: 23,
        occupation: "developer",
        company: "Scotiabank"
    },
    {
        name: "Sarah",
        age: 32,
        occupation: "manager",
        company: "TD"
    }];
    //renders the handlebars file with the data
    res.render('viewData2', {
        data: someData,
        layout: false //do not use the default Layout (main.hbs)
    })
});

app.engine('.hbs', exphbs.engine({
    extname: 'hbs',
    helpers:{
        helper1: function(options){
            //helper without "context", i.e. {{#helper}}...{{/helper}}
        },
        helper2: function(context, options){
            //helper with "context" i.e. {{#helper context}}...{{/helper}}
            //Helpers with context usually used to create iterative helpers whiich work with collection of data
        },
        strong: function(options){
            //Referencing options.fn(this) allows us to build a string containing new data/html in addition to the
            //existing content within the wrapper
            return '<strong>' + options.fn(this) + "</strong>";
        },
        list: function(context, options){
            var ret = "<ul>";

            for(var i = 0; i < context.length; i++){
                ret = ret + "<li>" + options.fn(context[i]) + "</li>";
            }
            return ret+ "</ul>";
        }

    }
}));

app.listen(HTTP_PORT, onHttpStart);
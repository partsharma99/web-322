var localFunction = function() {

}

var localMessage;

module.exports.writeMessage = function(msg){
    localMessage = msg;
}

module.exports.readMessage = function(){
    console.log(localMessage + " from " + __filename);
}
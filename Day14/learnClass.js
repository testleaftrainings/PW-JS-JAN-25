var Browser = /** @class */ (function () {
    function Browser() {
        //properties of the class
        this.browserName = "chrome";
        this.browserVersion = 133;
    }
    // method   
    Browser.prototype.browserDetails = function () {
        console.log("Browser information includes ".concat(this.browserName, " & ").concat(this.browserVersion));
    };
    return Browser;
}());
//this -->refered to current class property/method
//object to be created to access the class property and method
//syntax:
//variablename=new ClassName() //constructor -to allocate memory for the class members
var browserInfo = new Browser();
//use variablename.property /methodName()
browserInfo.browserDetails();

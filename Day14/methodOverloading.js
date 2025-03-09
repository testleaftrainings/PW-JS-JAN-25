var ElementAction = /** @class */ (function () {
    function ElementAction() {
    }
    ElementAction.prototype.clickEle = function (locatorValue, forceClick) {
        if (forceClick == true) {
            console.log("The element is clicked forcefully");
        }
        else {
            console.log("Element clicked normally");
        }
    };
    return ElementAction;
}());
var ol = new ElementAction();
ol.clickEle("text=CRM", true);
ol.clickEle("text=Leads");

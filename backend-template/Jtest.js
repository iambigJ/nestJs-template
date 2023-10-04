var myClass = /** @class */ (function () {
    function myClass() {
        this.x = '1234';
    }
    myClass.prototype.getX = function () {
        return this.x;
    };
    return myClass;
}());
var instance = new myClass();
console.log(instance.getX()); // Output: '1234'

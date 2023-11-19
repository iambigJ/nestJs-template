"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger = void 0;
var MyLogger = /** @class */ (function () {
    function MyLogger() {
    }
    MyLogger.prototype.log = function (message) {
        this.writeToFile('📢 ' + message);
    };
    MyLogger.prototype.error = function (message, trace) {
        this.writeToFile('❌ ' + message);
        this.writeToFile('🔍 Stack Trace: ' + trace);
    };
    MyLogger.prototype.warn = function (message) {
        this.writeToFile('⚠️ ' + message);
    };
    MyLogger.prototype.debug = function (message) {
        this.writeToFile('🐞 ' + message);
    };
    MyLogger.prototype.writeToFile = function (message) {
        // Implement the logic to write logs to a file here.
        console.log(message); // For demonstration purposes, we'll just log to the console.
    };
    return MyLogger;
}());
exports.MyLogger = MyLogger;

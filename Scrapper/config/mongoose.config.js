"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConfig = void 0;
var mongoose_1 = require("@nestjs/mongoose");
exports.mongooseConfig = mongoose_1.MongooseModule.forRootAsync({
    useFactory: function () { return ({
        uri: 'mongodb://localhost/scrapper',
        connectionFactory: function (connection) {
            connection.on('connected', function () {
                console.log('MongoDB connected');
            });
            connection.on('error', function (error) {
                console.error('MongoDB connection error:', error);
            });
            // You can perform additional setup here
            connection._events.connected();
            return connection;
        },
    }); },
});

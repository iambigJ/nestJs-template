"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parrentSchema = exports.parrentClass = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var parrentClass = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _CarName_decorators;
    var _CarName_initializers = [];
    var _Url_decorators;
    var _Url_initializers = [];
    var parrentClass = _classThis = /** @class */ (function () {
        function parrentClass_1() {
            this.CarName = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _CarName_initializers, void 0));
            this.Url = __runInitializers(this, _Url_initializers, void 0);
        }
        return parrentClass_1;
    }());
    __setFunctionName(_classThis, "parrentClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _CarName_decorators = [(0, mongoose_1.Prop)({ required: true, unique: false })];
        _Url_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _CarName_decorators, { kind: "field", name: "CarName", static: false, private: false, access: { has: function (obj) { return "CarName" in obj; }, get: function (obj) { return obj.CarName; }, set: function (obj, value) { obj.CarName = value; } }, metadata: _metadata }, _CarName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _Url_decorators, { kind: "field", name: "Url", static: false, private: false, access: { has: function (obj) { return "Url" in obj; }, get: function (obj) { return obj.Url; }, set: function (obj, value) { obj.Url = value; } }, metadata: _metadata }, _Url_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        parrentClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return parrentClass = _classThis;
}();
exports.parrentClass = parrentClass;
exports.parrentSchema = mongoose_1.SchemaFactory.createForClass(parrentClass);

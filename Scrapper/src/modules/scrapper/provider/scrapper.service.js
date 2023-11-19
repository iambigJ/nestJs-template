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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapperService = void 0;
var common_1 = require("@nestjs/common");
var puppeteer_core_1 = require("puppeteer-core"); // Make sure to import puppeteer
var ScrapperService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ScrapperService = _classThis = /** @class */ (function () {
        function ScrapperService_1(scrapperRepo, config) {
            this.scrapperRepo = scrapperRepo;
            this.config = config;
        }
        ScrapperService_1.prototype.test = function () {
            console.log(this.config.get('cars'));
        };
        ScrapperService_1.prototype.srapp_parrent_url = function (divar_url) {
            return __awaiter(this, void 0, void 0, function () {
                var browser, hrefResult, page, Result, previousHeight, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            hrefResult = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 14, 15, 18]);
                            return [4 /*yield*/, puppeteer_core_1.default.launch({
                                    args: ['--no-sandbox'],
                                    executablePath: '/bin/chromium-browser',
                                    headless: 'new'
                                })];
                        case 2:
                            browser = _a.sent();
                            return [4 /*yield*/, browser.newPage()];
                        case 3:
                            page = _a.sent();
                            return [4 /*yield*/, page.setDefaultTimeout(10000)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, page.goto(divar_url, {
                                    waitUntil: 'domcontentloaded'
                                })];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6:
                            if (!true) return [3 /*break*/, 13];
                            return [4 /*yield*/, page.waitForSelector('a')];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, page.$$eval('#post-list-container-id a', function (elements) { return elements.map(function (item) { return item.href; }); })];
                        case 8:
                            Result = _a.sent();
                            if (!Result) {
                                return [3 /*break*/, 13];
                            }
                            hrefResult.push(Result);
                            return [4 /*yield*/, page.evaluate('document.body.scrollHeight')];
                        case 9:
                            previousHeight = _a.sent();
                            return [4 /*yield*/, page.evaluate('window.scrollTo(0, document.body.scrollHeight)')];
                        case 10:
                            _a.sent();
                            return [4 /*yield*/, page.waitForFunction("document.body.scrollHeight > ".concat(previousHeight))];
                        case 11:
                            _a.sent();
                            return [4 /*yield*/, page.waitForTimeout(4000)];
                        case 12:
                            _a.sent();
                            console.log(previousHeight);
                            console.log(Result.length);
                            return [3 /*break*/, 6];
                        case 13: return [3 /*break*/, 18];
                        case 14:
                            err_1 = _a.sent();
                            console.error('Error occurred outside loop:', err_1);
                            return [3 /*break*/, 18];
                        case 15:
                            if (!browser) return [3 /*break*/, 17];
                            return [4 /*yield*/, browser.close()];
                        case 16:
                            _a.sent();
                            _a.label = 17;
                        case 17: return [2 /*return*/, hrefResult];
                        case 18: return [2 /*return*/];
                    }
                });
            });
        };
        ScrapperService_1.prototype.scrapp_images = function (mainCarname) {
            return __awaiter(this, void 0, void 0, function () {
                var browser, result, urls, arr, _i, urls_1, url, page, image_src, page_url, err_2, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 17, 18, 21]);
                            return [4 /*yield*/, this.scrapperRepo.findOne({ CarName: mainCarname })];
                        case 2:
                            result = _a.sent();
                            console.log(result.Url);
                            if (!result) {
                                console.log('No matching record found.');
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, puppeteer_core_1.default.launch({
                                    args: ['--no-sandbox'],
                                    executablePath: '/bin/chromium-browser',
                                    headless: 'new'
                                })];
                        case 3:
                            browser = _a.sent();
                            urls = result.Url;
                            arr = [];
                            _i = 0, urls_1 = urls;
                            _a.label = 4;
                        case 4:
                            if (!(_i < urls_1.length)) return [3 /*break*/, 16];
                            url = urls_1[_i];
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 14, , 15]);
                            return [4 /*yield*/, browser.newPage()];
                        case 6:
                            page = _a.sent();
                            return [4 /*yield*/, page.setDefaultTimeout(20000)];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, page.goto(url, {
                                    waitUntil: 'domcontentloaded'
                                })];
                        case 8:
                            _a.sent();
                            return [4 /*yield*/, page.waitForTimeout(2000)];
                        case 9:
                            _a.sent();
                            return [4 /*yield*/, page.waitForSelector('img')];
                        case 10:
                            _a.sent();
                            return [4 /*yield*/, page.$$eval('.kt-row img', function (elements) {
                                    return elements.map(function (element) { return element.src; });
                                })];
                        case 11:
                            image_src = _a.sent();
                            arr.push(image_src);
                            return [4 /*yield*/, page.url()];
                        case 12:
                            page_url = _a.sent();
                            if (arr.length > 2000) {
                                return [3 /*break*/, 16];
                            }
                            console.log(page_url);
                            console.log(image_src);
                            return [4 /*yield*/, page.close()];
                        case 13:
                            _a.sent();
                            return [3 /*break*/, 15];
                        case 14:
                            err_2 = _a.sent();
                            console.log("Error processing URL ".concat(url, ": ").concat(err_2));
                            return [3 /*break*/, 15];
                        case 15:
                            _i++;
                            return [3 /*break*/, 4];
                        case 16: 
                        //filter array and return
                        return [2 /*return*/, arr];
                        case 17:
                            err_3 = _a.sent();
                            console.log("Error: ".concat(err_3));
                            return [3 /*break*/, 21];
                        case 18:
                            if (!browser) return [3 /*break*/, 20];
                            return [4 /*yield*/, browser.close()];
                        case 19:
                            _a.sent();
                            _a.label = 20;
                        case 20: return [7 /*endfinally*/];
                        case 21: return [2 /*return*/];
                    }
                });
            });
        };
        return ScrapperService_1;
    }());
    __setFunctionName(_classThis, "ScrapperService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ScrapperService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ScrapperService = _classThis;
}();
exports.ScrapperService = ScrapperService;

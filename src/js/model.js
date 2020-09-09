"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultRange = /** @class */ (function () {
    function DefaultRange(options) {
        this.min = options.min;
        this.max = options.max;
        this.defaultValue = options.defaultValue;
        this.rightValue = options.rightValue;
        this.isRange = options.isRange;
        this.rightProgressBar = options.rightProgressBar;
        this.isOutData = options.isOutData;
    }
    return DefaultRange;
}());
var model;
exports.default = model = new DefaultRange({
    min: 10,
    max: 100,
    defaultValue: 20,
    rightValue: 45,
    isRange: false,
    rightProgressBar: false,
    isOutData: false
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("./model"));
var view_1 = require("./view");
var form = new view_1.Form({
    isDouble: model_1.default.isRange
});
form.createForm();
form.createInput();
form.setMin(model_1.default.min);
form.setMax(model_1.default.max);
var styles = new view_1.Styles({
    isDouble: model_1.default.isRange
});
styles.createStyles();
styles.createTrack();
var progressBar = new view_1.ProgressBar({
    isDouble: model_1.default.isRange
});
progressBar.createProgressBar();
var thumb = new view_1.Thumb({
    isDouble: model_1.default.isRange
});
thumb.createThumb();
// events
var eventInput = function () {
    form.setInputValue(model_1.default.defaultValue, model_1.default.rightValue);
    var placeDefault = progressBar.calcPercent(Number(form.defaultInput.value), Number(form.defaultInput.min), Number(form.defaultInput.max));
    var placeRight = form.rightInput ?
        progressBar.calcPercent(Number(form.rightInput.value), Number(form.rightInput.min), Number(form.rightInput.max))
        : NaN;
    progressBar.setDefault(placeDefault, placeRight);
    if (model_1.default.rightProgressBar) {
        progressBar.setRight(placeDefault);
    }
    thumb.placeThumb(placeDefault, placeRight);
};
eventInput();
form.defaultInput.addEventListener('input', function () {
    model_1.default.defaultValue = Number(form.defaultInput.value);
    eventInput();
});
if (model_1.default.isRange) {
    form.rightInput.addEventListener('input', function () {
        model_1.default.rightValue = Number(form.rightInput.value);
        eventInput();
    });
}

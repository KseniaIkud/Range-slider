"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thumb = exports.ProgressBar = exports.Styles = exports.Form = void 0;
var rangeSlider = document.querySelector('.range-slider');
var Form = /** @class */ (function () {
    function Form(options) {
        this.isDouble = options.isDouble;
        this.parent = options.parent ? options.parent : rangeSlider;
    }
    Form.prototype.createForm = function () {
        this.form = (document.createElement('div'));
        this.form.classList.add('range-slider__form');
        this.parent.append(this.form);
    };
    Form.prototype.createInput = function () {
        if (this.isDouble) {
            this.defaultInput = document.createElement('input');
            this.defaultInput.type = 'range';
            this.defaultInput.classList.add('range-slider__input');
            this.defaultInput.classList.add('range-slider__input_left');
            this.form.append(this.defaultInput);
            this.rightInput = document.createElement('input');
            this.rightInput.type = 'range';
            this.rightInput.classList.add('range-slider__input');
            this.rightInput.classList.add('range-slider__input_right');
            this.form.append(this.rightInput);
        }
        else {
            this.defaultInput = document.createElement('input');
            this.defaultInput.type = 'range';
            this.defaultInput.classList.add('range-slider__input');
            this.form.append(this.defaultInput);
        }
    };
    Form.prototype.setInputValue = function (value, rightValue) {
        if (rightValue === void 0) { rightValue = NaN; }
        this.defaultInput.value = String(value);
        if (this.isDouble) {
            this.rightInput.value = String(rightValue);
        }
    };
    Form.prototype.setMin = function (min) {
        if (min === void 0) { min = 0; }
        this.defaultInput.min = String(min);
        if (this.isDouble) {
            this.rightInput.min = String(min);
        }
    };
    Form.prototype.setMax = function (max) {
        if (max === void 0) { max = 100; }
        this.defaultInput.max = String(max);
        if (this.isDouble) {
            this.rightInput.max = String(max);
        }
    };
    return Form;
}());
exports.Form = Form;
var Styles = /** @class */ (function () {
    function Styles(options) {
        this.isDouble = options.isDouble;
        this.parent = options.parent ? options.parent : rangeSlider;
    }
    Styles.prototype.createStyles = function () {
        this.style = document.createElement('div');
        this.style.classList.add('range-slider__style');
        this.parent.append(this.style);
    };
    Styles.prototype.createTrack = function () {
        this.track = document.createElement('div');
        this.track.classList.add('range-slider__track');
        this.style.append(this.track);
    };
    return Styles;
}());
exports.Styles = Styles;
var ProgressBar = /** @class */ (function () {
    function ProgressBar(options) {
        this.isDouble = options.isDouble;
        this.parent = document.querySelector('.range-slider__style');
    }
    ProgressBar.prototype.createProgressBar = function () {
        this.bar = document.createElement('div');
        this.bar.classList.add('range-slider__progress-bar');
        this.parent.append(this.bar);
    };
    ProgressBar.prototype.calcPercent = function (value, min, max) {
        return ((value - min) / (max - min)) * 100;
    };
    ProgressBar.prototype.setDefault = function (percent, percentRight) {
        if (percentRight === void 0) { percentRight = NaN; }
        if (!this.isDouble) {
            this.bar.style.right = (100 - percent) + '%';
            this.bar.style.left = String(0);
        }
        else {
            this.bar.style.left = percent + '%';
            this.bar.style.right = (100 - percentRight) + '%';
        }
    };
    ProgressBar.prototype.setRight = function (percent) {
        if (!this.isDouble) {
            this.bar.style.left = percent + '%';
            this.bar.style.right = String(0);
        }
    };
    return ProgressBar;
}());
exports.ProgressBar = ProgressBar;
var Thumb = /** @class */ (function () {
    function Thumb(options) {
        this.isDouble = options.isDouble;
        this.parent = document.querySelector('.range-slider__style');
    }
    Thumb.prototype.createThumb = function () {
        if (this.isDouble) {
            this.thumbDefault = document.createElement('div');
            this.thumbDefault.classList.add('range-slider__thumb');
            this.thumbDefault.classList.add('range-slider__thumb_left');
            this.parent.append(this.thumbDefault);
            this.thumbRight = document.createElement('div');
            this.thumbRight.classList.add('range-slider__thumb');
            this.thumbRight.classList.add('range-slider__thumb_right');
            this.parent.append(this.thumbRight);
        }
        else {
            this.thumbDefault = document.createElement('div');
            this.thumbDefault.className = 'range-slider__thumb';
            this.parent.append(this.thumbDefault);
        }
    };
    Thumb.prototype.placeThumb = function (percent, percentRight) {
        if (percentRight === void 0) { percentRight = NaN; }
        this.thumbDefault.style.left = percent + '%';
        if (this.isDouble) {
            this.thumbRight.style.right = (100 - percentRight) + '%';
        }
    };
    return Thumb;
}());
exports.Thumb = Thumb;

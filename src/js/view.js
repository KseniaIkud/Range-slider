const rangeSlider = document.querySelector('.range-slider');


class Form {
    constructor(isDouble = false, parent = rangeSlider) {
        this.isDouble = isDouble // boolean
        this.parent = parent // DOM
    }
    createForm() {
        this.form = document.createElement('div')
        this.form.classList = 'range-slider__form'
        this.parent.append(this.form)
    }
    createInput() {
        if (this.isDouble.isDouble) {
            this.defaultInput = document.createElement('input')
            this.defaultInput.type = 'range'
            this.defaultInput.classList = 'range-slider__input range-slider__input_left'
            this.form.append(this.defaultInput)
            
            this.rightInput = document.createElement('input')
            this.rightInput.type = 'range'
            this.rightInput.classList = 'range-slider__input range-slider__input_right'
            this.form.append(this.rightInput)

        } else {
            this.defaultInput = document.createElement('input')
            this.defaultInput.type = 'range'
            this.defaultInput.classList = 'range-slider__input'
            this.form.append(this.defaultInput)
        }
    }
    setInputValue(value, rightValue = NaN) {
        this.defaultInput.value = +value
        if (this.isDouble.isDouble) {   
            this.rightInput.value = +rightValue
        }
    }
    setMin(min) {
        this.defaultInput.min = +min
        if (this.isDouble.isDouble) {
            this.rightInput.min = +min
        }
    }
    setMax(max) {
        this.defaultInput.max = +max
        if (this.isDouble.isDouble) {
            this.rightInput.max = +max
        }
    }
}

class Styles {
    constructor(isDouble = false, parent = rangeSlider) {
        this.isDouble = isDouble
        this.parent = parent
    }
    createStyles() {
        this.style = document.createElement('div')
        this.style.classList = 'range-slider__style'
        this.parent.append(this.style)
    }
    createTrack() {
        this.track = document.createElement('div')
        this.track.classList = 'range-slider__track'
        this.style.append(this.track)
    }
}

class ProgressBar {
    constructor(isDouble = false, parent = document.querySelector('.range-slider__style')) {
        this.isDouble = isDouble
        this.parent = parent
    }
    createProgressBar () {
        this.bar = document.createElement('div')
        this.bar.classList = 'range-slider__progress-bar'
        this.parent.append(this.bar)
    }
    calcPercent(value, min, max) {
        return ((value - min) / (max - min)) * 100
    }
    setDefault(percent, percentRight = NaN) {
        if (!this.isDouble.isDouble) {
            this.bar.style.right = (100 - +percent) + '%'
            this.bar.style.left = 0
        } else {
            this.bar.style.left = +percent + '%'
            this.bar.style.right = (100 - +percentRight) + '%'
        }
    }
    setRight(percent) {
        if (!this.isDouble.isDouble) {
            this.bar.style.left = +percent + '%'
            this.bar.style.right = 0
        }
    }
}

class Thumb {
    constructor(isDouble = false, parent = document.querySelector('.range-slider__style')) {
        this.isDouble = isDouble
        this.parent = parent
    }
    createThumb() {
        if(this.isDouble.isDouble) {
            this.thumbDefault = document.createElement('div')
            this.thumbDefault.classList = 'range-slider__thumb range-slider__thumb_left'
            this.parent.append(this.thumbDefault)

            this.thumbRight = document.createElement('div')
            this.thumbRight.classList = 'range-slider__thumb range-slider__thumb_right'
            this.parent.append(this.thumbRight)
        } else {
            this.thumbDefault = document.createElement('div')
            this.thumbDefault.className = 'range-slider__thumb'
            this.parent.append(this.thumbDefault)
        }
    }
    placeThumb(percent, percentRight = NaN) {
        this.thumbDefault.style.left = percent + '%'
        if (this.isDouble.isDouble) {
            this.thumbRight.style.right = (100 - percentRight) + '%'
        }
    }
}

export {Form, Styles, ProgressBar, Thumb}
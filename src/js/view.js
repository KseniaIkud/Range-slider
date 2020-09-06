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
            this.leftInput = document.createElement('input')
            this.leftInput.type = 'range'
            this.leftInput.classList = 'range-slider__input range-slider__input_left'
            this.form.append(this.leftInput)
            
            this.rightInput = document.createElement('input')
            this.rightInput.type = 'range'
            this.rightInput.classList = 'range-slider__input range-slider__input_right'
            this.form.append(this.rightInput)

        } else {
            this.singleInput = document.createElement('input')
            this.singleInput.type = 'range'
            this.singleInput.classList = 'range-slider__input'
            this.form.append(this.singleInput)
        }
    }
    setInputValue(value, rightValue = NaN) {
        if (this.isDouble.isDouble) {
            this.leftInput.value = +value
            this.rightInput.value = +rightValue
        } else {
            this.singleInput.value = +value
        }
    }
    setMin(min) {
        if (this.isDouble.isDouble) {
            this.leftInput.min = +min
            this.rightInput.min = +min
        } else {
            this.singleInput.min = +min
        }
    }
    setMax(max) {
        if (this.isDouble.isDouble) {
            this.leftInput.max = +max
            this.rightInput.max = +max
        } else {
            this.singleInput.max = +max
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
    setLeft(percent) {
        if (!this.isDouble.isDouble) {
            this.bar.style.right = (100 - +percent) + '%'
            this.bar.style.left = 0
        }
    }
    setRight(percent) {
        if (!this.isDouble.isDouble) {
            this.bar.style.left = +percent + '%'
            this.bar.style.right = 0
        }
    }
    setRange(percentLeft, percentRight) {
        if (this.isDouble.isDouble) {
            this.bar.style.left = +percentLeft + '%'
            this.bar.style.right = (100 - +percentRight) + '%'
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
            this.thumbLeft = document.createElement('div')
            this.thumbLeft.classList = 'range-slider__thumb range-slider__thumb_left'
            this.parent.append(this.thumbLeft)

            this.thumbRight = document.createElement('div')
            this.thumbRight.classList = 'range-slider__thumb range-slider__thumb_right'
            this.parent.append(this.thumbRight)
        } else {
            this.thumbSingle = document.createElement('div')
            this.thumbSingle.className = 'range-slider__thumb'
            this.parent.append(this.thumbSingle)
        }
    }
    placeThumb(percent, percentRight = NaN) {
        if (this.isDouble.isDouble) {
            this.thumbLeft.style.left = percent + '%'
            this.thumbRight.style.right = (100 - percentRight) + '%'
        } else {
            this.thumbSingle.style.left = percent + '%'
        }
        
    }
    
}

// values from model

let isRange = false
let currentValue = 30
let rightValue = 40
let min = 10
let max = 50

// controller?... extends blah blah blah

const form = new Form({
    isDouble: isRange
}) 
form.createForm()
form.createInput()
form.setInputValue(currentValue, rightValue)
form.setMin(min)
form.setMax(max)

const styles = new Styles({
    isDouble: isRange
})
styles.createStyles()
styles.createTrack()

const progressBar = new ProgressBar({
    isDouble: isRange
})
progressBar.createProgressBar()
progressBar.setLeft(
    progressBar.calcPercent(
        form.singleInput.value, 
        form.singleInput.min, 
        form.singleInput.max))


const thumb = new Thumb({
    isDouble: isRange
})
thumb.createThumb()
thumb.placeThumb(
    progressBar.calcPercent(
        form.singleInput.value, 
        form.singleInput.min, 
        form.singleInput.max))

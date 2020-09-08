const rangeSlider: Element = document.querySelector('.range-slider')
//querySelectorAll and forEach are needed for independence


interface IOptions {
    isDouble: boolean
    parent?: Element
}


class Form {
    
    isDouble: boolean
    parent: Element
    form: any
    defaultInput: any
    rightInput: any

    constructor(options: IOptions) {
        this.isDouble = options.isDouble
        this.parent = options.parent ? options.parent : rangeSlider
    }
    
    createForm(): void {
        this.form = document.createElement('div')
        this.form.classList = 'range-slider__form'
        this.parent.append(this.form)
    }
    
    createInput(): void {
        if (this.isDouble) {
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
    setInputValue(value: number, rightValue: number = NaN): void {
        this.defaultInput.value = value
        if (this.isDouble) {   
            this.rightInput.value = rightValue
        }
    }
    setMin(min: number = 0): void {
        this.defaultInput.min = min
        if (this.isDouble) {
            this.rightInput.min = min
        }
    }
    setMax(max: number = 100): void {
        this.defaultInput.max = max
        if (this.isDouble) {
            this.rightInput.max = max
        }
    }
}

class Styles {
    isDouble: boolean
    parent: Element
    style: any
    track: any

    constructor(options: IOptions) {
        this.isDouble = options.isDouble
        this.parent = options.parent ? options.parent : rangeSlider
    }
    
    createStyles(): void {
        this.style = document.createElement('div')
        this.style.classList = 'range-slider__style'
        this.parent.append(this.style)
    }
    
    createTrack(): void {
        this.track = document.createElement('div')
        this.track.classList = 'range-slider__track'
        this.style.append(this.track)
    }
}

class ProgressBar {
    isDouble: boolean
    parent: Element
    bar: any
    constructor(options: IOptions) {
        this.isDouble = options.isDouble
        this.parent = options.parent ? options.parent : document.querySelector('.range-slider__style')
    }
    createProgressBar(): void {
        this.bar = document.createElement('div')
        this.bar.classList = 'range-slider__progress-bar'
        this.parent.append(this.bar)
    }
    calcPercent(value: number, min: number, max: number): number {
        return ((value - min) / (max - min)) * 100
    }
    setDefault(percent: number, percentRight: number = NaN): void {
        if (!this.isDouble) {
            this.bar.style.right = (100 - percent) + '%'
            this.bar.style.left = 0
        } else {
            this.bar.style.left = percent + '%'
            this.bar.style.right = (100 - percentRight) + '%'
        }
    }
    setRight(percent: number): void {
        if (!this.isDouble) {
            this.bar.style.left = percent + '%'
            this.bar.style.right = 0
        }
    }
}

class Thumb {
    isDouble: boolean
    parent: Element
    thumbDefault: any
    thumbRight: any

    constructor(options: IOptions) {
        this.isDouble = options.isDouble
        this.parent = options.parent ? options.parent : document.querySelector('.range-slider__style')
    }
    createThumb() {
        if(this.isDouble) {
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
    placeThumb(percent: number, percentRight: number = NaN) {
        this.thumbDefault.style.left = percent + '%'
        if (this.isDouble) {
            this.thumbRight.style.right = (100 - percentRight) + '%'
        }
    }
}

export {Form, Styles, ProgressBar, Thumb}



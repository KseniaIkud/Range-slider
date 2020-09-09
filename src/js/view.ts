const rangeSlider: HTMLDivElement = document.querySelector('.range-slider') as HTMLDivElement
//querySelectorAll and forEach are needed for independence


interface IOptions {
    isDouble: boolean
    parent?: HTMLDivElement
}


class Form {
    
    isDouble: boolean
    parent: HTMLDivElement
    form!: HTMLDivElement
    defaultInput!: HTMLInputElement
    rightInput!: HTMLInputElement

    constructor(options: IOptions) {
        this.isDouble = options.isDouble
        this.parent = options.parent ? options.parent : rangeSlider
    }
    
    createForm(): void {
        this.form = <HTMLDivElement>(document.createElement('div'))
        this.form.classList.add('range-slider__form')
        this.parent.append(this.form)
    }
    
    createInput(): void {
        if (this.isDouble) {
            this.defaultInput = document.createElement('input')
            this.defaultInput.type = 'range'
            this.defaultInput.classList.add('range-slider__input') 
            this.defaultInput.classList.add('range-slider__input_left')
            this.form.append(this.defaultInput)
            
            this.rightInput = document.createElement('input')
            this.rightInput.type = 'range'
            this.rightInput.classList.add('range-slider__input')
            this.rightInput.classList.add('range-slider__input_right')
            this.form.append(this.rightInput)

        } else {
            this.defaultInput = document.createElement('input')
            this.defaultInput.type = 'range'
            this.defaultInput.classList.add('range-slider__input')
            this.form.append(this.defaultInput)
        }
    }
    setInputValue(value: number, rightValue: number = NaN): void {
        this.defaultInput.value = String(value)
        if (this.isDouble) {   
            this.rightInput.value = String(rightValue)
        }
    }
    setMin(min: number = 0): void {
        this.defaultInput.min = String(min)
        if (this.isDouble) {
            this.rightInput.min = String(min)
        }
    }
    setMax(max: number = 100): void {
        this.defaultInput.max = String(max)
        if (this.isDouble) {
            this.rightInput.max = String(max)
        }
    }
}

class Styles {
    isDouble: boolean
    parent: HTMLDivElement
    style!: HTMLDivElement
    track!: HTMLDivElement

    constructor(options: IOptions) {
        this.isDouble = options.isDouble
        this.parent = options.parent ? options.parent : rangeSlider
    }
    
    createStyles(): void {
        this.style = document.createElement('div')
        this.style.classList.add('range-slider__style')
        this.parent.append(this.style)
    }
    
    createTrack(): void {
        this.track = document.createElement('div')
        this.track.classList.add('range-slider__track')
        this.style.append(this.track)
    }
}

class ProgressBar {
    isDouble: boolean
    parent: HTMLDivElement
    bar!: HTMLDivElement
    constructor(options: IOptions) {
        this.isDouble = options.isDouble
        this.parent = document.querySelector('.range-slider__style') as HTMLDivElement
    }
    createProgressBar(): void {
        this.bar = document.createElement('div')
        this.bar.classList.add('range-slider__progress-bar')
        this.parent.append(this.bar)
    }
    calcPercent(value: number, min: number, max: number): number {
        return ((value - min) / (max - min)) * 100
    }
    setDefault(percent: number, percentRight: number = NaN): void {
        if (!this.isDouble) {
            this.bar.style.right = (100 - percent) + '%'
            this.bar.style.left = String(0)
        } else {
            this.bar.style.left = percent + '%'
            this.bar.style.right = (100 - percentRight) + '%'
        }
    }
    setRight(percent: number): void {
        if (!this.isDouble) {
            this.bar.style.left = percent + '%'
            this.bar.style.right = String(0)
        }
    }
}

class Thumb {
    isDouble: boolean
    parent: HTMLDivElement
    thumbDefault!: HTMLDivElement
    thumbRight!: HTMLDivElement

    constructor(options: IOptions) {
        this.isDouble = options.isDouble
        this.parent = document.querySelector('.range-slider__style') as HTMLDivElement
    }
    createThumb() {
        if(this.isDouble) {
            this.thumbDefault = document.createElement('div')
            this.thumbDefault.classList.add('range-slider__thumb')
            this.thumbDefault.classList.add('range-slider__thumb_left')
            this.parent.append(this.thumbDefault)

            this.thumbRight = document.createElement('div')
            this.thumbRight.classList.add('range-slider__thumb')
            this.thumbRight.classList.add('range-slider__thumb_right')
            this.parent.append(this.thumbRight)
        } else {
            this.thumbDefault = document.createElement('div')
            this.thumbDefault.className = 'range-slider__thumb'
            this.parent.append(this.thumbDefault)
        }
    }
    placeThumb(percent: number, percentRight: number = NaN): void {
        this.thumbDefault.style.left = percent + '%'
        if (this.isDouble) {
            this.thumbRight.style.right = (100 - percentRight) + '%'
        }
    }
}

export {Form, Styles, ProgressBar, Thumb}

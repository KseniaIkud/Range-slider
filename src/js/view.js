class CreateElement {
    constructor(options) {
        this.className = options.className,
        this.parent = options.parent
    }
    createDiv() {
        let element = document.createElement('div')
        element.className = this.className
        this.parent.append(element)
    }
    createInput() {
        let element = document.createElement('input')
        element.className = this.className
        this.parent.append(element)
    }
}

// DOM structure

const rangeSlider = document.querySelector('.range-slider')

const rangeSliderForm = new CreateElement({
    className: 'range-slider__form',
    parent: rangeSlider
})
rangeSliderForm.createDiv()

const rangeSliderStyle = new CreateElement({
    className: 'range-slider__style',
    parent: rangeSlider
})
rangeSliderStyle.createDiv()

const rangeSliderTrack = new CreateElement({
    className: 'range-slider__track',
    parent: document.querySelector('.range-slider__style')
})
rangeSliderTrack.createDiv()

const rangeSliderProgressBar = new CreateElement({
    className:'range-slider__progress-bar',
    parent: document.querySelector('.range-slider__style')
})
rangeSliderProgressBar.createDiv()


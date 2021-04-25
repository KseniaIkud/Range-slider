import './demo.css'

const getValue = (id) => {
    return Number(document.getElementById(id).value)
}
const getBooleanValue = (id) => {
    return document.getElementById(id).checked
}
const rangeSliderNumbersId = ['min', 'max', 'initialValue', 'leftValue', 'rightValue', 'step']
const rangeSliderBooleansId = ['isRange', 'rightProgressBar', 'overThumbElement', 'isVertical', 'isScale']
const rangeSliderId = ['rangeSlider_first', 'rangeSlider_second', 'rangeSlider_third', 'rangeSlider_forth']

const state = {}
const setState = (name, options) => {
    state[name] = options
}
for (let i = 1; i <= rangeSliderId.length; i++) {
    setState(rangeSliderId[i-1], {
        min: getValue('min' + i),
        max: getValue('max' + i),
        initialValue: getValue('initialValue' + i),
        leftValue: getValue('leftValue' + i),
        rightValue: getValue('rightValue' + i),
        step: getValue('step' + i),
        isRange: getBooleanValue('isRange' + i),
        rightProgressBar: getBooleanValue('rightProgressBar' + i),
        overThumbElement: getBooleanValue('overThumbElement' + i),
        isVertical: getBooleanValue('isVertical' + i),
        isScale: getBooleanValue('isScale' + i)
    })
}
const spyOnSlider = (item, index) => {
    let slider = document.getElementById(item).firstChild
    let setSliderValue = () => {
        let newDefaultValue = slider.getAttribute('default-value')
        if (newDefaultValue) {
            document.getElementById('initialValue' + index).value = newDefaultValue
            state[rangeSliderId[index - 1]]['initialValue'] = newDefaultValue
        }
        let newLeftValue = slider.getAttribute('left-value')
        if (newLeftValue) {
            document.getElementById('leftValue' + index).value = newLeftValue
            state[rangeSliderId[index - 1]]['leftValue'] = newLeftValue
        }
        let newRightValue = slider.getAttribute('right-value')
        if (newRightValue) {
            document.getElementById('rightValue' + index).value = newRightValue
            state[rangeSliderId[index - 1]]['rightValue'] = newRightValue
        }
    }
    slider.addEventListener('mousemove', () => {
        setSliderValue()
    })
    slider.addEventListener('click', () => {
        setSliderValue()
    })
}
const renderRangeSlider = (id, panel) => {
    let elem = document.getElementById(id)
    if (elem.firstElementChild) {
        elem.removeChild(elem.firstElementChild)
    }
    $('#' + id).rangeSlider({
        min: panel.min,
        max: panel.max,
        initialValue: panel.initialValue,
        leftValue: panel.leftValue,
        rightValue: panel.rightValue,
        step: panel.step,
        isRange: panel.isRange,
        rightProgressBar: panel.rightProgressBar,
        overThumbElement: panel.overThumbElement,
        isVertical: panel.isVertical,
        isScale: panel.isScale
    })
}
for (let i = 1; i <= rangeSliderId.length; i++) {
    rangeSliderNumbersId.forEach(item => {
        let element = document.getElementById(item + i)
        element.addEventListener('change', () => {
            state[rangeSliderId[i - 1]][item] = element.value
            renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]])
            spyOnSlider(rangeSliderId[i - 1], i)
        })
    })
    rangeSliderBooleansId.forEach(item => {
        let element = document.getElementById(item + i)
        element.addEventListener('change', () => {
            state[rangeSliderId[i - 1]][item] = element.checked
            renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]])
            spyOnSlider(rangeSliderId[i - 1], i)
        })
    })
    renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]])
    spyOnSlider(rangeSliderId[i - 1], i)
}






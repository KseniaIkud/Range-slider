import './demo.css'

class Panel {
  constructor(options) {
    this.min = options.min
    this.max = options.max
    this.initialValue = options.initialValue
    this.leftValue = options.leftValue
    this.rightValue = options.rightValue
    this.isRange = options.isRange
    this.rightProgressBar = options.rightProgressBar
    this.overThumbElement = options.overThumbElement
    this.step = options.step
    this.isVertical = options.isVertical
    this.isScale = options.isScale
  }
}
const getValue = (id) => {
  return Number(document.getElementById(id).value)
}
const getBooleanValue = (id) => {
  return document.getElementById(id).checked
}
const rerenderFirstSlider = () => {
  let elem = document.getElementById('rangeSlider_first')
  let div = elem.firstElementChild
  elem.removeChild(div)
  $('#rangeSlider_first').rangeSlider({
    min: firstPanel.min,
    max: firstPanel.max,
    initialValue: firstPanel.initialValue,
    leftValue: firstPanel.leftValue,
    rightValue: firstPanel.rightValue,
    step: firstPanel.step,
    isRange: firstPanel.isRange,
    rightProgressBar: firstPanel.rightProgressBar,
    overThumbElement: firstPanel.overThumbElement,
    isVertical: firstPanel.isVertical,
    isScale: firstPanel.isScale
  })
}
const rangeSliderNumbersId = ['min', 'max', 'initialValue', 'leftValue', 'rightValue', 'step']
const rangeSliderBooleansId = ['isRange', 'rightProgressBar', 'overThumbElement', 'isVertical', 'isScale']



const firstPanel = new Panel({
  min: getValue('min1'),
  max: getValue('max1'),
  initialValue: getValue('initialValue1'),
  leftValue: getValue('leftValue1'),
  rightValue: getValue('rightValue1'),
  step: getValue('step1'),
  isRange: getBooleanValue('isRange1'),
  rightProgressBar: getBooleanValue('rightProgressBar1'),
  overThumbElement: getBooleanValue('overThumbElement1'),
  isVertical: getBooleanValue('isVertical1'),
  isScale: getBooleanValue('isScale1'),
})

rangeSliderNumbersId.forEach(item => {
  let element = document.getElementById(item + '1')
  element.addEventListener('blur', () => {
    firstPanel[item] = element.value
    rerenderFirstSlider()
  })
})
rangeSliderBooleansId.forEach(item => {
  let element = document.getElementById(item + '1')
  element.addEventListener('change', () => {
    firstPanel[item] = element.checked
    rerenderFirstSlider()
  })
})


$('#rangeSlider_first').rangeSlider({
  min: firstPanel.min,
  max: firstPanel.max,
  step: firstPanel.step,
  initialValue: firstPanel.initialValue,
  overThumbElement: firstPanel.overThumbElement,
  isScale: firstPanel.isScale,
  isVertical: firstPanel.isVertical
})
$('#rangeSlider_second').rangeSlider({
  isRange: true,
  min: 2000,
  max: 6000,
  overThumbElement: true,
  isScale: true,
  leftValue: 2500,
  rightValue: 3000
  // isVertical: true
})
$('#rangeSlider_third').rangeSlider({
  min: 0,
  max: 30,
  initialValue: 20,
  rightProgressBar: true,
  overThumbElement: true,
  step: 5,
  isScale: true
})
$('#rangeSlider_forth').rangeSlider({
  initialValue: 20,
  overThumbElement: true,
  isRange: true,
  step: 1,
  min: -20,
  max: 100,
  isScale: true
})
  
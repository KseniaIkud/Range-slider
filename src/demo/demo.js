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
const renderRangeSlider = (id, panel) => {
  let elem = document.getElementById(id)
  let div = elem.firstElementChild
  if (div) {
    elem.removeChild(div)
  }
  $('#'+id).rangeSlider({
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
for (let i=1; i<5; i++) {
  const panel = {
    min: getValue('min'+ i),
    max: getValue('max'+ i),
    initialValue: getValue('initialValue'+ i),
    leftValue: getValue('leftValue'+ i),
    rightValue: getValue('rightValue'+ i),
    step: getValue('step'+ i),
    isRange: getBooleanValue('isRange'+ i),
    rightProgressBar: getBooleanValue('rightProgressBar'+ i),
    overThumbElement: getBooleanValue('overThumbElement'+ i),
    isVertical: getBooleanValue('isVertical'+ i),
    isScale: getBooleanValue('isScale'+ i),
  }
  rangeSliderNumbersId.forEach(item => {
    let element = document.getElementById(item + i)
    element.addEventListener('blur', () => {
      panel[item] = element.value
      renderRangeSlider(rangeSliderId[i-1], panel)
    })
  })
  rangeSliderBooleansId.forEach(item => {
    let element = document.getElementById(item + i)
    element.addEventListener('change', () => {
      panel[item] = element.checked
      renderRangeSlider(rangeSliderId[i-1], panel)
    })
  })
  renderRangeSlider(rangeSliderId[i-1], panel)
}

//
// const firstPanel = {
//   min: getValue('min'+1),
//   max: getValue('max'+1),
//   initialValue: getValue('initialValue'+1),
//   leftValue: getValue('leftValue'+1),
//   rightValue: getValue('rightValue'+1),
//   step: getValue('step'+1),
//   isRange: getBooleanValue('isRange'+1),
//   rightProgressBar: getBooleanValue('rightProgressBar'+1),
//   overThumbElement: getBooleanValue('overThumbElement'+1),
//   isVertical: getBooleanValue('isVertical'+1),
//   isScale: getBooleanValue('isScale'+1),
// }
//
// rangeSliderNumbersId.forEach(item => {
//   let element = document.getElementById(item + '1')
//   element.addEventListener('blur', () => {
//     firstPanel[item] = element.value
//     renderRangeSlider('rangeSlider_first')
//   })
// })
// rangeSliderBooleansId.forEach(item => {
//   let element = document.getElementById(item + '1')
//   element.addEventListener('change', () => {
//     firstPanel[item] = element.checked
//     renderRangeSlider('rangeSlider_first')
//   })
// })
//
// renderRangeSlider('rangeSlider_first')
//
// $('#rangeSlider_second').rangeSlider({
//   isRange: true,
//   min: 2000,
//   max: 6000,
//   overThumbElement: true,
//   isScale: true,
//   leftValue: 2500,
//   rightValue: 3000
//   // isVertical: true
// })
// $('#rangeSlider_third').rangeSlider({
//   min: 0,
//   max: 30,
//   initialValue: 20,
//   rightProgressBar: true,
//   overThumbElement: true,
//   step: 5,
//   isScale: true
// })
// $('#rangeSlider_forth').rangeSlider({
//   initialValue: 20,
//   overThumbElement: true,
//   isRange: true,
//   step: 1,
//   min: -20,
//   max: 100,
//   isScale: true
// })
//
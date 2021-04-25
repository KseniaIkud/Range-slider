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

const spyOnSlider = (item, index) => {
  let slider = document.getElementById(item).firstChild
  let setSliderValue = () => {
    document.getElementById('initialValue' + index).value = slider.getAttribute('default-value')
    document.getElementById('leftValue' + index).value = slider.getAttribute('left-value')
    document.getElementById('rightValue' + index).value = slider.getAttribute('right-value')
  }
  setSliderValue()
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
for (let i = 1; i <= rangeSliderId.length; i++) {
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
    element.addEventListener('change', () => {
      panel[item] = element.value
      renderRangeSlider(rangeSliderId[i-1], panel)
      spyOnSlider(rangeSliderId[i-1], i)
      
    })
  })
  rangeSliderBooleansId.forEach(item => {
    let element = document.getElementById(item + i)
    element.addEventListener('change', () => {
      panel[item] = element.checked
      renderRangeSlider(rangeSliderId[i-1], panel)
      spyOnSlider(rangeSliderId[i-1], i)
    })
  })
  renderRangeSlider(rangeSliderId[i-1], panel)
  spyOnSlider(rangeSliderId[i-1], i)
}






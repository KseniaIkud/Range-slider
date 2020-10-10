import './demo.css'

$('.first-range-slider').rangeSlider({
  min: 10,
  max: 40,
  step: 10,
  initialValue: 30,
  overThumbElement: true,
  isScale: true,
  isVertical: true,
})
$('.second-range-slider').rangeSlider({
  isRange: true,
  min: 20,
  max: 60,
  leftValue: 40,
  rightValue: 50,
  overThumbElement: true,
  isScale: true,
  // isVertical: true
})
$('.third-range-slider').rangeSlider({
  min: 0,
  max: 30,
  initialValue: 20,
  rightProgressBar: true,
  overThumbElement: true,
  step: 5,
  isScale: true
})
$('.forth-range-slider').rangeSlider({
  initialValue: 20,
  overThumbElement: true,
  isRange: true,
  step: 1,
  min: -20,
  max: 100,
  isScale: true
})
  
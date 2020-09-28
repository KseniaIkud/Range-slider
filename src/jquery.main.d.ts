
import {Form, Styles, ProgressBar, Thumb} from './mvc/subViews.ts'
import {View} from './mvc/view.ts'
import {Model} from './mvc/model.ts'
import {Controller} from './mvc/controller'


(function($: JQueryStatic) {
    $.fn.rangeSlider = function(settings: {
        min?: number
        max?: number
        initialValue?: number
        leftValue?: number
        defaultValue?: number
        rightValue?: number
        isRange?: boolean
        rightProgressBar?: boolean
        overThumbElement?: boolean
        step?: number
        isVertical?: boolean
    }) {
        const plugin = new Controller(
            new Model({
                min: settings.min,
                max: settings.max,
                defaultValue: settings.initialValue || settings.leftValue,
                rightValue: settings.rightValue,
                isRange: settings.isRange,
                rightProgressBar: settings.rightProgressBar,
                overThumbElement: settings.overThumbElement,
                step: settings.step,
                isVertical: settings.isVertical
            }), 
            new View( 
                this,
                new Form(),
                new Styles(),
                new ProgressBar(),
                new Thumb() 
            )
        )
        return plugin
    }
})(jQuery)


$('#first-range-slider').rangeSlider({
    isRange: true,
    leftValue: 15,
    rightValue: 60,
    overThumbElement: true,
    step: 3
})
$('#second-range-slider').rangeSlider({
    leftValue: 40,
    rightValue: 70,
    overThumbElement: false
})
$('#third-range-slider').rangeSlider({
    min: 0,
    max: 30,
    initialValue: 20,
    rightProgressBar: true,
    overThumbElement: true
})
$('#forth-range-slider').rangeSlider({
    initialValue: 20,
    isRange: true,
    overThumbElement: true,
    step: 10,
    max: 100,
    isVertical: true
})

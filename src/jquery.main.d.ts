

import {Slider} from './mvc/view/slider'
import {Track} from './mvc/view/track'
import {ProgressBar} from './mvc/view/progressBar'
import {Thumb} from './mvc/view/thumb'
import {View} from './mvc/view/view.ts'
import {Model} from './mvc/model.ts'
import {Controller} from './mvc/controller.ts'


(function($: JQueryStatic) {
    $.fn.rangeSlider = function(settings: {
        min?: number
        max?: number
        initialValue?: number
        leftValue?: number
        rightValue?: number
        isRange?: boolean
        rightProgressBar?: boolean
        overThumbElement?: boolean
        step?: number
        isVertical?: boolean
        isScale?: boolean
    }) {
        return new Controller(
            new Model({
                min: settings.min,
                max: settings.max,
                defaultValue: settings.isRange ? settings.leftValue : settings.initialValue,
                rightValue: settings.rightValue,
                isRange: settings.isRange,
                rightProgressBar: settings.rightProgressBar,
                overThumbElement: settings.overThumbElement,
                step: settings.step,
                isVertical: settings.isVertical,
                isScale: settings.isScale
            }), 
            new View( 
                this,
                new Slider(),
                new Track(),
                new ProgressBar(),
                new Thumb() 
            )
        )
    }
})(jQuery)


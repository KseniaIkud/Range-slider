import {Form, Styles, ProgressBar, Thumb} from './mvc/subViews'
import {View} from './mvc/view'
import {Model} from './mvc/model'
import {Controller} from './mvc/contoller'


(function($: JQueryStatic) {
    $.fn.rangeSlider = function() {
        const plugin = new Controller(
            new Model(), 
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

$('#first-range-slider').rangeSlider()
$('#second-range-slider').rangeSlider()
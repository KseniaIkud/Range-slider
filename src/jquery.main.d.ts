

import {Form, Styles, ProgressBar, Thumb} from './js/subViews'
import {View} from './js/mainView'
import {Model} from './js/model'
import {Controller} from './js/contoller'


(function($: JQueryStatic) {
    $.fn.rangeSlider = function() {
        const plugin = new Controller(
            new Model(), 
            new View(
                new Form({}), 
                new Styles({}),
                new ProgressBar({}),
                new Thumb({}) 
            )
        )
        return plugin
    }
})(jQuery)
// const rangeSliders: NodeList = document.querySelectorAll('.range-slider') as NodeList
//         rangeSliders.forEach(rangeSlider => {
            
//         })
$('#first-range-slider').rangeSlider()
$('#second-range-slider').rangeSlider()
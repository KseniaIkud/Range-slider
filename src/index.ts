

import './main.scss'


import {Form, Styles, ProgressBar, Thumb} from './js/subViews'
import {View} from './js/mainView'
import {Model} from './js/model'
import {Controller} from './js/contoller'


const rangeSliders: NodeList = document.querySelectorAll('.range-slider') as NodeList
rangeSliders.forEach(rangeSlider => {
    const plugin = new Controller(
        new Model(), 
        new View(
            new Form({
                parent: rangeSlider as HTMLDivElement
            }), 
            new Styles({
                parent: rangeSlider as HTMLDivElement
            }),
            new ProgressBar({}),
            new Thumb({}) 
        )
    )
    plugin
});


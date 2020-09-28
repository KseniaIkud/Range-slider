import {Model} from './model'
import {View} from './view'

class Controller {
    model: Model
    view: View
    constructor(model: Model, view: View) {
        this.model = model
        this.view = view
        this.view.options = this.model.dataForView
        this.init() 
    }
    init = () => {
        this.view.subscribe(this)
        this.model.subscribe(this)
        this.view.init()
    }
    updateModel(option: string, newValue: number) {
        this.model.update(option, newValue)
    }
    updateView() {
        this.view.options.defaultValue = this.model.defaultValue
        this.view.options.rightValue = this.model.rightValue
        this.view.setInput()
    }
}

export {Controller}
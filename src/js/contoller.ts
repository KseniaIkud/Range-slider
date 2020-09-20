import {Model} from './model'
import {Form, Styles, ProgressBar, Thumb} from './subViews'
import {View} from './mainView'

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
        this.view.init()
        this.model.init()  
    }
    updateModel(option: string) {
        if (option === 'default') {
            this.model.defaultValue = Number(this.view.form.defaultInput.value)
        }
        if (option === 'right') {
            this.model.rightValue = Number(this.view.form.rightInput.value)
        }
    }
}


// for Each parent

const plugin = new Controller(
    new Model(), 
    new View(
        new Form({}), 
        new Styles({}), 
        new ProgressBar({}), 
        new Thumb({})
    )
)
plugin
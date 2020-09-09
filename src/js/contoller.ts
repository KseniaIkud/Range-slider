import model from './model'
import {Form, Styles, ProgressBar, Thumb} from './view'

const form = new Form({
    isDouble: model.isRange
}) 
form.createForm()
form.createInput()
form.setMin(model.min)
form.setMax(model.max)

const styles = new Styles({
    isDouble: model.isRange
})
styles.createStyles()
styles.createTrack()

const progressBar = new ProgressBar({
    isDouble: model.isRange
})
progressBar.createProgressBar()

const thumb = new Thumb({
    isDouble: model.isRange
})
thumb.createThumb()

// events

const eventInput = function (): void {
    
    form.setInputValue(model.defaultValue, model.rightValue)

    const placeDefault: number = progressBar.calcPercent(
        Number(form.defaultInput.value), 
        Number(form.defaultInput.min), 
        Number(form.defaultInput.max))

    const placeRight: number = form.rightInput ? 
        progressBar.calcPercent(
            Number(form.rightInput.value), 
            Number(form.rightInput.min), 
            Number(form.rightInput.max)) 
            : NaN 
        
    
    progressBar.setDefault(placeDefault, placeRight)
    
    if (model.rightProgressBar) { 
    progressBar.setRight(placeDefault) 
    }

    thumb.placeThumb(placeDefault, placeRight)
}
eventInput()

form.defaultInput.addEventListener('input', function() {
    model.defaultValue = Number(form.defaultInput.value)
    eventInput()
})
if (model.isRange) {
    form.rightInput.addEventListener('input', function() {
        model.rightValue = Number(form.rightInput.value)
        eventInput()
    })
}







import {Form, Styles, ProgressBar, Thumb} from './subViews'

interface IData {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
}
interface IObserver {
    update(arg0: string): void
}

class View {
    form: Form
    styles: Styles
    progressBar: ProgressBar
    thumb: Thumb
    options: IData
    observers: IObserver[]
    constructor(form: Form, styles: Styles, progressBar: ProgressBar, thumb: Thumb) {
        this.form = form
        this.styles = styles
        this.progressBar = progressBar
        this.thumb = thumb

        // this options are only an example, the plugin works with options from the model
        // view gets options from model via controller
        this.options = {
            min: 0,
            max: 100,
            defaultValue: 10,
            rightValue: 50,
            isRange: true,
            rightProgressBar: false
        }

        this.observers = []
    }
    subscribe(observer: IObserver) {
        this.observers.push(observer)
    }
    init = () => {
        

        this.form.isDouble = this.options.isRange
        this.styles.isDouble = this.options.isRange
        this.progressBar.isDouble = this.options.isRange
        this.thumb.isDouble = this.options.isRange

        this.form.createForm()
        this.form.createInput()
        this.form.setMin(this.options.min)
        this.form.setMax(this.options.max)

        this.styles.createStyles()
        this.styles.createTrack()

        this.progressBar.parent = this.styles.style
        this.progressBar.createProgressBar() 

        this.thumb.parent = this.styles.style
        this.thumb.createThumb()

        this.setInput()
        this.eventInput()

        
        
    } // надо разбить по сабвьюям, а здесь только их методы вызывать

    setInput = () => {
        this.form.setInputValue(this.options.defaultValue, this.options.rightValue)
        
        const placeDefault: number = this.progressBar.calcPercent(
                    Number(this.form.defaultInput.value), 
                    Number(this.form.defaultInput.min), 
                    Number(this.form.defaultInput.max))
        
            
        const placeRight: number = this.form.rightInput ? 
            this.progressBar.calcPercent(
                Number(this.form.rightInput.value), 
                Number(this.form.rightInput.min), 
                Number(this.form.rightInput.max)) 
                : NaN 
        
        
        this.progressBar.setDefault(placeDefault, placeRight)
        
        if (this.options.rightProgressBar) { 
            this.progressBar.setRight(placeDefault) 
        }

        this.thumb.placeThumb(placeDefault, placeRight)

        
    }
    eventInput = () => {
        this.form.defaultInput.addEventListener('input', () => {
            this.options.defaultValue = Number(this.form.defaultInput.value)
            this.setInput()
            this.observers.forEach(observer => {
                observer.update('default')
            })
        })
        this.form.rightInput.addEventListener('input', () => {
            this.options.rightValue = Number(this.form.rightInput.value)
            this.setInput()
            this.observers.forEach(observer => {
                observer.update('default')
            })
        })
        
    }
    
}

export {View}

import {Form, Styles, ProgressBar, Thumb} from './subViews'

interface IData {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
}
interface IObserverView {
    updateModel(arg0: string, arg1: number): void
}

class View {
    parent: HTMLElement
    wrapper!: HTMLDivElement

    form: Form
    styles: Styles
    progressBar: ProgressBar
    thumb: Thumb
    options: IData
    observers: IObserverView[]
    constructor(parent: HTMLElement, form: Form, styles: Styles, progressBar: ProgressBar, thumb: Thumb) {
        this.parent = parent
        this.form = form
        this.styles = styles
        this.progressBar = progressBar
        this.thumb = thumb

    // default data
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
    subscribe(observer: IObserverView) {
        this.observers.push(observer)
    }
    init = () => {
        this.createWrapper()

        this.form.init(
            this.wrapper, 
            this.options.isRange, 
            this.options.min, 
            this.options.max
        )
        this.styles.init(this.wrapper)
        this.progressBar.createProgressBar(this.styles.style)
        this.thumb.createThumb(this.styles.style, this.options.isRange)
        
        

        this.setInput()
        this.eventInput()
        this.progressBar.bar.onmousedown = elem => {
            this.eventClick(elem)
        }
        this.styles.track.onmousedown = elem => {
            this.eventClick(elem)
        }
  
    } 

    createWrapper = () => {
        this.wrapper = document.createElement('div')
        this.wrapper.classList.add('range-slider')
        this.parent.append(this.wrapper)
    }

    setInput = () => {
        this.form.setInputValue(this.options.isRange, this.options.defaultValue, this.options.rightValue)
        
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
        
        
        this.progressBar.setDefault(this.options.isRange, placeDefault, placeRight)
        
        if (this.options.rightProgressBar) { 
            this.progressBar.setRight(this.options.isRange, placeDefault) 
        }

        this.thumb.placeThumb(this.options.isRange, placeDefault, placeRight)

        
    }
    eventInput = () => {
        this.form.defaultInput.addEventListener('input', () => {
            this.options.defaultValue = Number(this.form.defaultInput.value)
            this.setInput()
            this.observers.forEach(observer => {
                observer.updateModel('default', Number(this.form.defaultInput.value))
            })
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('input', () => {
                this.options.rightValue = Number(this.form.rightInput.value)
                this.setInput()
                this.observers.forEach(observer => {
                    observer.updateModel('right', Number(this.form.rightInput.value))
                })
            })
        }
    }
    eventClick(elem: MouseEvent) {
        let coords: DOMRect = this.styles.track.getBoundingClientRect()
        let length: number = coords.right - coords.left
        let currentPosition: number = elem.pageX - coords.left
        let percent: number = currentPosition/length * 100
        let newValue: number

        this.thumb.placeThumb(this.options.isRange, percent)
        this.progressBar.setDefault(this.options.isRange, percent)
        newValue = this.calcValue(percent)
        this.form.defaultInput.value = String(newValue)
        this.observers.forEach(observer => {
            observer.updateModel('default', newValue)
        })
    }
    calcValue(percent: number, 
        min: number = this.options.min, 
        max: number = this.options.max): number {
            let diapason: number = max - min
            return Math.round(diapason - (max - ((diapason) * percent) / 100))
    }
    
    
}

export {View}

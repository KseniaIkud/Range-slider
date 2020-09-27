
import {Form, Styles, ProgressBar, Thumb} from './subViews'

interface IData {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
    overThumbElement: boolean
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
            rightProgressBar: false,
            overThumbElement: true
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
        this.thumb.init(
            this.styles.style,
            this.options.isRange,
            this.options.overThumbElement,
            this.options.defaultValue,
            this.options.rightValue
        )
        

        this.setInput()
        
        this.eventInput()
        this.progressBar.bar.onmousedown = elem => {
            this.eventClick(elem)
        }
        this.styles.track.onmousedown = elem => {
            this.eventClick(elem)
        }
        this.eventHover()
        this.eventActive()
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
            this.thumb.setThumbValue(this.options.isRange, 
                this.options.defaultValue, this.options.rightValue)
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('input', () => {
                this.options.rightValue = Number(this.form.rightInput.value)
                this.setInput()
                
                this.observers.forEach(observer => {
                    observer.updateModel('right', Number(this.form.rightInput.value))
                })
                this.thumb.setThumbValue(this.options.isRange, 
                    this.options.defaultValue, this.options.rightValue)
            })
        }
    }
    eventClick(elem: MouseEvent) {
        const coords: DOMRect = this.styles.track.getBoundingClientRect()
        const length: number = coords.right - coords.left
        const currentPosition: number = elem.pageX - coords.left
        const percent: number = currentPosition/length * 100

        const placeDefault: number = this.progressBar.calcPercent(
            Number(this.form.defaultInput.value), 
            Number(this.form.defaultInput.min), 
            Number(this.form.defaultInput.max))
        
        const newValue: number = this.calcValue(percent)
        const halfOfBar: number = (this.options.rightValue + this.options.defaultValue) / 2
    
        const isRightTrack: boolean = this.options.isRange && newValue > this.options.rightValue
        const isRightBar = this.options.isRange && newValue > halfOfBar

        if(isRightTrack || isRightBar) {
            this.form.rightInput.value = String(newValue)
            this.options.rightValue = newValue
            
            this.thumb.placeThumb(this.options.isRange, placeDefault, percent)

            this.progressBar.setDefault(this.options.isRange, placeDefault, percent)

            this.observers.forEach(observer => {
                observer.updateModel('right', newValue)
            })


        } else {
            this.form.defaultInput.value = String(newValue)
            this.options.defaultValue = newValue
            
            this.thumb.placeThumb(this.options.isRange, percent)
            
            if (this.options.rightProgressBar) {
                this.progressBar.setRight(this.options.isRange, percent)
            } else {
                this.progressBar.setDefault(this.options.isRange, percent)
            }

            this.observers.forEach(observer => {
                observer.updateModel('default', newValue)
            })

            
        }
    }
    calcValue(percent: number, 
        min: number = this.options.min, 
        max: number = this.options.max): number {
            let diapason: number = max - min
            return Math.round(diapason - (max - ((diapason) * percent) / 100))
    }
    
    eventHover = () => {
        this.form.defaultInput.addEventListener('mouseover', () => {
            if (this.options.overThumbElement) {
                this.thumb.thumbOutput.classList.add('display-block')
            }
            this.thumb.thumbDefault.classList.add('range-slider__thumb_hover')
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('mouseover', () => {
                if (this.options.overThumbElement) {
                    this.thumb.thumbOutputRight?.classList.add('display-block')
                }
                this.thumb.thumbRight.classList.add('range-slider__thumb_hover')
            })
        }

        this.form.defaultInput.addEventListener('mouseout', () => {
            if (this.options.overThumbElement) {
                this.thumb.thumbOutput.classList.remove('display-block')
            }
            this.thumb.thumbDefault.classList.remove('range-slider__thumb_hover')
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('mouseout', () => {
                if (this.options.overThumbElement) {
                    this.thumb.thumbOutputRight?.classList.remove('display-block')
                }
                this.thumb.thumbRight.classList.remove('range-slider__thumb_hover')
            })
        }
    }
    eventActive = () => {
        this.form.defaultInput.addEventListener('mousedown', () => {
            this.thumb.thumbDefault.classList.add('range-slider__thumb_active')
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('mousedown', () => {
                this.thumb.thumbRight.classList.add('range-slider__thumb_active')
            })
        }

        this.form.defaultInput.addEventListener('mouseup', () => {
            this.thumb.thumbDefault.classList.remove('range-slider__thumb_active')
        })
        if (this.options.isRange) {
            this.form.rightInput.addEventListener('mouseup', () => {
                this.thumb.thumbRight.classList.remove('range-slider__thumb_active')
            })
        }
    }
    
}

export {View}

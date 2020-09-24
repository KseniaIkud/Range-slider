interface IData {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
}
interface IObserverModel {
    updateView(): void
}

class Model {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
    dataForView: IData
    observers: IObserverModel[]
    constructor(options: IData) {
        this.min = options.min ? options.min : 0
        this.max = options.max ? options.max : 100
        this.defaultValue = options.defaultValue ? options.defaultValue : 50
        this.rightValue = options.rightValue ? options.rightValue : 60
        this.isRange = options.isRange ? options.isRange : false
        this.rightProgressBar = options.rightProgressBar ? options.rightProgressBar : false
        this.observers = []
        this.dataForView = {
            min: this.min,
            max: this.max,
            defaultValue: this.defaultValue,
            rightValue: this.rightValue,
            isRange: this.isRange,
            rightProgressBar: this.rightProgressBar
        }
    }
    subscribe(observer: IObserverModel) {
        this.observers.push(observer)
    }
    limitToggle(option: string, newValue: number) {
        switch (option) {
            case('default'):

                if (newValue < this.rightValue) {
                    this.defaultValue = newValue
                } else {
                    this.observers.forEach(observer => {
                        observer.updateView()
                    })
                }
    
                break
            
            case('right'):
            
                if (newValue > this.defaultValue) {
                    this.rightValue = newValue
                } else {
                    this.observers.forEach(observer => {
                        observer.updateView()
                    })
                }
            
        }
        
    }
}

export {Model}
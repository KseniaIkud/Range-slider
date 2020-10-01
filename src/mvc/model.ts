interface IData {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
    overThumbElement: boolean
    isVertical: boolean
    step?: number
    isScale: boolean
    scaleValues: number[]
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
    overThumbElement: boolean
    dataForView: IData
    step: number
    isVertical: boolean
    isScale: boolean
    scaleValues: number[]
    observers: IObserverModel[]
    constructor(options: IData) {
        this.min = options.min ? options.min : 0
        this.max = options.max ? options.max : 100
        this.defaultValue = options.defaultValue ? options.defaultValue : 50
        this.rightValue = options.rightValue ? options.rightValue : 60
        this.isRange = options.isRange
        this.rightProgressBar = options.rightProgressBar
        this.overThumbElement = options.overThumbElement
        this.step = options.step ? options.step : 1
        this.isVertical = options.isVertical
        this.isScale = options.isScale
        this.scaleValues = []
        this.observers = []
        this.dataForView = {
            min: this.min,
            max: this.max,
            defaultValue: this.defaultValue,
            rightValue: this.rightValue,
            isRange: this.isRange,
            rightProgressBar: this.rightProgressBar,
            overThumbElement: this.overThumbElement,
            isVertical: this.isVertical,
            isScale: this.isScale,
            scaleValues: this.scaleValues
        }
    }
    subscribe(observer: IObserverModel) {
        this.observers.push(observer)
    }
    init = () => {
        this.setScale()
    }
    update(option: string, newValue: number) {
        if (this.isRange) {
            this.limitToggle(option, newValue)
        } else {
            this.limitStep(newValue)
        }
    }
    setScale() {
        let allValues: number[] = []
        
        for (let i: number = this.min; i <= this.max; i++) {
            if (i % this.step === 0) {
                allValues.push(i)
            }
        }
        if (allValues.length <= 11) {
            allValues.forEach(i => {
                this.scaleValues.push(i)
            })
        } else {
            let scaleStep = Math.round(allValues.length / 10)
            for (let i: number = 0; i < allValues.length; i+=scaleStep) {
                this.scaleValues.push(allValues[i])
            }
        }
        let lastValue: number = allValues[allValues.length - 1]
        if (!this.scaleValues.includes(lastValue)) {
            this.scaleValues.push(lastValue)
        }
        
    }
    limitToggle(option: string, newValue: number) {
        switch (option) {
            
            case('default'):
                if (newValue < this.rightValue) {
                    this.limitStep(newValue)
                } else {
                    this.observers.forEach(observer => {
                        observer.updateView()
                    })
                }
    
                break
            
            case('right'):
            
                if (newValue > this.defaultValue) {
                    this.limitStep(newValue, 'right')
                    
                } else {
                    console.log('алярма')
                    this.observers.forEach(observer => {
                        observer.updateView()
                    })
                }
            
        }
        
    }
    limitStep(newValue: number, option: string = 'default') {
        switch(option) {
            case('default'): 
            if(newValue % this.step === 0) {
                this.defaultValue = newValue
                
            } else {
                this.defaultValue = this.calcNearest(newValue)
                this.observers.forEach(observer => {
                    observer.updateView()
                })
                
            }
            break


            case('right'):
            if(newValue % this.step === 0) {
                this.rightValue = newValue
                
            } else {
                this.rightValue = this.calcNearest(newValue)
                this.observers.forEach(observer => {
                    observer.updateView()
                })
            }

            break
        }

    }
    calcNearest(newValue: number): number {
        let roundToMin = newValue - (newValue % this.step)
        if ((newValue % this.step) > (this.step / 2)) {
            return this.step + roundToMin
        }
        return roundToMin
    }
}

export {Model}
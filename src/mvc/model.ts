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
    scaleValues: Array<number>
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
        this.min = Number(options.min || 0)
        this.max = Number(options.max === 0 ? 0 : (options.max || 100))
        this.defaultValue = Number(options.defaultValue === 0 ? 0 : (options.defaultValue || 50))
        this.rightValue = Number(options.rightValue === 0 ? 0 : (options.rightValue || 70))
        this.step = Number(options.step || 1)
        this.isRange = options.isRange || false
        this.rightProgressBar = options.rightProgressBar || false
        this.overThumbElement = options.overThumbElement || false
        this.isVertical = options.isVertical || false
        this.isScale = options.isScale || false
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
            scaleValues: this.getScaleValues()
        }
    }
    subscribe(observer: IObserverModel) {
        this.observers.push(observer)
    }
    init = () => {
        this.getScaleValues()
    }
    update(newValue: number, option: string, ) {
        if (this.isRange) {
            this.limitToggle(newValue, option)
        } else {
            this.limitStep(newValue)
        }
    }
    // setScale(min: number, max: number, step: number): number[] {
    //     let scaleValues: number[] = []
    //     if (!this.isScale) {
    //         return []
    //     }

    //     let allValues: number[] = []
    //     for (let i: number = min; i <= max; i++) {
    //         if (i % step === 0) {
    //             allValues.push(i)
    //         }
    //     }
    //     if (allValues.length <= 11) {
    //         allValues.forEach(i => {
    //             scaleValues.push(i)
    //         })
    //     } else {
    //         let scaleStep = Math.round(allValues.length / 10)
    //         for (let i: number = 0; i < allValues.length; i+=scaleStep) {
    //             scaleValues.push(allValues[i])
    //         }
    //     }
    //     console.log(scaleValues)
    //     return scaleValues
    // }
    getScaleValues(min: number = this.min,
        max: number = this.max, 
        step: number = this.step, 
        isScale: boolean = this.isScale): number[] {
        let scaleValues: number[] = []
        if (!isScale) {
            return scaleValues
        }
        let allValues: number[] = []
        for (let i: number = min; i <= max; i++) {
            if (i % step === 0) {
                allValues.push(i)
            }
        }
        if (allValues.length <= 11) {
            allValues.forEach(i => {
                scaleValues.push(i)
            })
        } else {
            let scaleStep = Math.round(allValues.length / 10)
            for (let i: number = 0; i < allValues.length; i+=scaleStep) {
                scaleValues.push(allValues[i])
            }
        }
        return scaleValues
    }
    limitToggle( newValue: number, option: string) {
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

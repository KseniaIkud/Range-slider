
class Model {

    constructor(options) {
        this.min = options.min ? options.min : 0
        this.max = options.max ? options.max : 100
        this.defaultValue = options.defaultValue ? options.defaultValue : 50
        this.rightValue = options.rightValue ? options.rightValue : 60
        this.isRange = options.isRange || false
        this.rightProgressBar = options.rightProgressBar || false
        this.overThumbElement = options.overThumbElement || false
        this.step = options.step ? options.step : 1
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
            scaleValues: this.scaleValues
        }
    }
    subscribe(observer) {
        this.observers.push(observer)
    }
    init = () => {
        this.setScale()
    }
    sum(arg1, arg2) {
        return arg1 + arg2
    }
    update(option, newValue) {
        if (this.isRange) {
            this.limitToggle(option, newValue)
        } else {
            this.limitStep(newValue)
        }
    }
    setScale() {
        let allValues = []
        
        for (let i = this.min; i <= this.max; i++) {
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
            for (let i = 0; i < allValues.length; i+=scaleStep) {
                this.scaleValues.push(allValues[i])
            }
        }
        let lastValue = allValues[allValues.length - 1]
        if (!this.scaleValues.includes(lastValue)) {
            this.scaleValues.push(lastValue)
        }
        
    }
    limitToggle(option, newValue) {
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
    limitStep(newValue, option = 'default') {
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
    calcNearest(newValue) {
        let roundToMin = newValue - (newValue % this.step)
        if ((newValue % this.step) > (this.step / 2)) {
            return this.step + roundToMin
        }
        return roundToMin
    }
}

module.exports = Model

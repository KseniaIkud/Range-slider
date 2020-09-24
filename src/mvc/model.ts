interface IData {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
}

class Model {
    min: number
    max: number
    defaultValue: number
    rightValue?: number
    isRange: boolean
    rightProgressBar?: boolean
    
    dataForView: IData
    constructor(options: IData) {
        this.min = options.min ? options.min : 0
        this.max = options.max ? options.max : 100
        this.defaultValue = options.defaultValue ? options.defaultValue : 50
        this.rightValue = options.rightValue ? options.rightValue : 60
        this.isRange = options.isRange ? options.isRange : false
        this.rightProgressBar = options.rightProgressBar ? options.rightProgressBar : false
        this.dataForView = {
            min: this.min,
            max: this.max,
            defaultValue: this.defaultValue,
            rightValue: this.rightValue,
            isRange: this.isRange,
            rightProgressBar: this.rightProgressBar
        }
    }
    init = () => {
        console.log('from Model')
    }
}

export {Model}
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
    isOutData?: boolean
    dataForView: IData
    constructor() {
        this.min = 0
        this.max = 100
        this.defaultValue = 60
        this.rightValue = 50
        this.isRange = false
        this.rightProgressBar = false
        this.isOutData = false
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
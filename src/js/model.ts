interface IModel {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
    isOutData: boolean
}

class DefaultRange {
    min: number
    max: number
    defaultValue: number
    rightValue: number
    isRange: boolean
    rightProgressBar: boolean
    isOutData: boolean
    constructor(options: IModel) {
        this.min = options.min
        this.max = options.max
        this.defaultValue = options.defaultValue
        this.rightValue = options.rightValue
        this.isRange = options.isRange
        this.rightProgressBar = options.rightProgressBar
        this.isOutData = options.isOutData
    }
}

let model: any
export default model = new DefaultRange({
    min: 10,
    max: 100,
    defaultValue: 20,
    rightValue: 45,
    isRange: false,
    rightProgressBar: false,
    isOutData: false   
})
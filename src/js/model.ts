class DefaultRange {
    isRange: boolean
    rightProgressBar: boolean
    defaultValue: number
    rightValue: number
    isOutData: boolean
    min: number
    max: number
    constructor(options) {
        this.isRange = options.isRange
        this.rightProgressBar = options.rightProgressBar
        this.defaultValue = options.defaultValue
        this.rightValue = options.rightValue
        this.isOutData = options.isOutData
        this.min = options.min
        this.max = options.max
    }
}
let model: any
export default model = new DefaultRange( {
    isRange: true,
    rightProgressBar: true,
    defaultValue: 20,
    rightValue: 45,
    min: 10,
    max: 100
})


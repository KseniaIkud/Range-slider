class DefaultRange {
    constructor(options) {
        this.isOutData = options.isOutData,
        this.min = options.min,
        this.max = options.max
    }
}

class SingleRange extends DefaultRange {
    constructor(options) {
        super(options)
        this.isProgressBarRight = options.isProgressBarRight,
        this.value = options.value
    }
}

class DoubleRange extends DefaultRange {
    constructor(options) {
        super(options)
        this.valueLeft = options.valueLeft,
        this.valueRight = options.valueRight
    }
}

module.exports.SingleRange = SingleRange
module.exports.DoubleRange = DoubleRange


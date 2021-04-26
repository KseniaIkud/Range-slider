
import {Model} from '../src/mvc/model'

const _ = new Model({})

describe('max value', () => {
    test('if max is not defined, default value is 100', () => {
        expect(_.max).toBe(100)
    })
    test('max should be equal to 10', () => {
        let modelMax = new Model({
            max: 10
        })
        expect(modelMax.max).toBe(10)
    })
    test('max should be equal to 0', () => {
        let modelMax = new Model({
            max: 0
        })
        expect(modelMax.max).toBe(0)
    })
})

describe('main value, single or left', () => {
    test('if the value is not defined, default value is 50', () => {
        expect(_.defaultValue).toBe(50)
    })
    test('the value should be equal to 1000', () => {
        let modelDefault = new Model({
            defaultValue: 1000
        })
        expect(modelDefault.defaultValue).toBe(1000)
    })
    test('the value should be equal to 0', () => {
        let modelDefault = new Model({
            defaultValue: 0
        })
        expect(modelDefault.defaultValue).toBe(0)
    })
})

describe('right value', () => {
    test('if right value is not defined, default value is 70', () => {
        expect(_.rightValue).toBe(70)
    })
    test('right value should be equal to -200', () => {
        let modelRight = new Model({
            rightValue: -200
        })
        expect(modelRight.rightValue).toBe(-200)
    })
    test('right value should be equal to 0', () => {
        let modelRight = new Model({
            rightValue: 0
        })
        expect(modelRight.rightValue).toBe(0)
    })
})

describe('update observers function', () => {
    test('updateObservers function should be defined', () => {
        expect(_.updateObservers).toBeDefined()
    })
    test('example class should be added in observers', () => {
        class ExampleClass {
            updateView() {
                return 
            }
        }
        let exampleClass = new ExampleClass()
        _.subscribe(exampleClass)
        exampleClass.updateView = jest.fn()
        _.updateObservers()
        expect(exampleClass.updateView).toHaveBeenCalled()
    })
})
describe('get scale values function', () => {
    test('getScaleValues function should be defined', () => {
        expect(_.getScale).toBeDefined()
    })
    test('if there is no scale, getScaleValues function should return empty array', () => {
        expect(_.getScale(0, 1, 1, false)).toEqual([])
    })
    test('minimum 0, maximum 100, step 10 should return every 10 number', () => {
        let expectArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        expect(_.getScale(0, 100, 10, true)).toEqual(expectArray)
    })
    test('should work with negativies', () => {
        let expectArray = [-6, -4, -2, 0, 2, 4]
        expect(_.getScale(-6, 4, 2, true)).toEqual(expectArray)
    })
    test('should overwrite step if it is less or equal to zero', () => {
        let expectArray = [1, 2, 3, 4, 5]
        expect(_.getScale(1, 5, 0, true)).toEqual(expectArray)
        expect(_.getScale(1, 5, -100, true)).toEqual(expectArray)
    })
    test('the last value should be the max even if it does not fit the step', () => {
        let expectArray = [0, 5, 10, 16]
        expect(_.getScale(0, 16, 5, true)).toEqual(expectArray)
    })
    test('should return only 11 numbers max', () => {
        let expectArray = [100, 190, 280, 370, 460, 550, 640, 730, 820, 910, 1000]
        expect(_.getScale(100, 1000, 10, true)).toEqual(expectArray)
    })
})
describe('set default value function', () => {
    test('function should be defined', () => {
        expect(_.setDefaultValue).toBeDefined()
    })
    test('default value should be set', () => {
        _.setDefaultValue(50)
        expect(_.defaultValue).toBe(50)
    })
})
describe('set right value function', () => {
    test('function should be defined', () => {
        expect(_.setRightValue).toBeDefined()
    })
    test('default value should be set', () => {
        _.setRightValue(500)
        expect(_.rightValue).toBe(500)
    })
})
describe('limit step function', () => {
    test('limit step function should be defined', () => {
        expect(_.limitStep).toBeDefined()
    })
    
    test('setDefaultValue should be called with the same argument', () => {
        // the value is on the scale and it's left or single
        _.setDefaultValue = jest.fn()
        _.step = 1
        _.limitStep(5, 'default')
        expect(_.setDefaultValue).toHaveBeenCalledWith(5)
    })
    test('setDefaultValue should be called with different argument', () => {
        // the value is NOT on the scale and it's left or single
        _.setDefaultValue = jest.fn()
        _.step = 10
        _.limitStep(33, 'default')
        expect(_.setDefaultValue).toHaveBeenCalledWith(30)
    })
    test('setRightValue should be called with the same argument', () => {
        // the value is on the scale and it's right
        _.setRightValue = jest.fn()
        _.step = 1
        _.limitStep(50, 'right')
        expect(_.setRightValue).toHaveBeenCalledWith(50)
    })
    test('setRightValue should be called with different argument', () => {
        // the value is NOT on the scale and it's right
        _.setRightValue = jest.fn()
        _.step = 5
        _.limitStep(33, 'right')
        expect(_.setRightValue).toHaveBeenCalledWith(35)
    })
})
describe('limit toggle function', () => {
    test('limit toggle function should be defined', () => {
        expect(_.limitToggle).toBeDefined()
    })
    test('limit step function should be called with the same argument', () => {
        //new value is for single handle slider or it's left and less then the right value
        _.limitStep = jest.fn()
        _.rightValue = 10
        _.limitToggle(9, 'default')
        expect(_.limitStep).toHaveBeenCalledWith(9, "default")
    })
    test('limit step function should NOT be called and update observers should', () => {
        //new value pretending to be for left handle, but it's greater than the right value
        _.limitStep = jest.fn()
        _.updateObservers = jest.fn()
        _.rightValue = 10
        _.limitToggle(100, 'default')
        expect(_.limitStep).not.toHaveBeenCalled()
        expect(_.updateObservers).toHaveBeenCalled()
    })
    test('limit step function should be called with the same arguments', () => {
        //new value is for right handle and it's less than the left value
        _.limitStep = jest.fn()
        _.defaultValue = 15
        _.limitToggle(100, 'right')
        expect(_.limitStep).toHaveBeenCalledWith(100, 'right')
    })
    test('limit step function should NOT be called and update observers should', () => {
        //new value pretending to be for right handle, but it's less than the left value
        _.limitStep = jest.fn()
        _.updateObservers = jest.fn()
        _.defaultValue = -25
        _.limitToggle(-26, 'right')
        expect(_.limitStep).not.toHaveBeenCalled()
        expect(_.updateObservers).toHaveBeenCalled()
    })
})
describe('calc nearest function', () => {
    test('calc nearest function should be defined', () => {
        expect(_.calcNearest).toBeDefined()
    })
    test('should return 4 as the nearest even number for 5', () => {
        expect(_.calcNearest(5, 2)).toBe(4)
    })
    test('should return 9 as the nearest number for 8 in a row of every 3 number', () => {
        expect(_.calcNearest(8, 3)).toBe(9)
    })
    test('should work with 0 and negative numbers', () => {
        expect(_.calcNearest(-1, 10)).toBe(0)
    })
})
describe('subscribe function', () => {
    test('subscribe functions should be defined', () => {
        expect(_.subscribe).toBeDefined()
    })
    test('an item should be added to the observers list', () => {
        class ExampleClass {
            updateView() {
                return 
            }
        }
        _.subscribe(ExampleClass)
        expect(_.observers).toContain(ExampleClass)
    })
})
describe('init function', () => {
    test('init function should be defined', () => {
        expect(_.init).toBeDefined()
    })
    test('should call getScaleValues function', () => {
        _.getScale = jest.fn()
        _.init()
        expect(_.getScale).toHaveBeenCalled()
    })
})
describe('update function', () => {
    test('update function should be defined', () => {
        expect(_.update).toBeDefined()
    })
    test('new limit for range slider handles should be set', () => {
        _.limitToggle = jest.fn()
        _.isRange = true //range slider (two handles)

        _.update(5, 'default')
        expect(_.limitToggle).toHaveBeenCalledWith(5, 'default')
        
        _.update(500, 'right')
        expect(_.limitToggle).toHaveBeenCalledWith(500, 'right')
    })
    test('new step limit for single handle slider should be set', () => {
        _.limitStep = jest.fn()
        _.isRange = false //one handle slider

        _.update( 4002, "default")
        expect(_.limitStep).toHaveBeenCalledWith(4002, "default")
    })
})

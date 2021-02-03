
import {Model} from '../src/mvc/model'

const _ = new Model({})

describe('subscribe function', () => {
    test('subscribe functions should be defined', () => {
        expect(_.subscribe).toBeDefined()
    })
    test('an item should be added to the observers list', () => {
        class ExampleClass {}
        _.subscribe(ExampleClass)
        expect(_.observers).toContain(ExampleClass)
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
    test('should return only 11 numbers max', () => {
        let expectArray = [100, 190, 280, 370, 460, 550, 640, 730, 820, 910, 1000]
        expect(_.getScale(100, 1000, 10, true)).toEqual(expectArray)
    })
})

describe('limit toggle function', () => {
    test('limit toggle function should be defined', () => {
        expect(_.limitToggle).toBeDefined()
    })
})

describe('limit step function', () => {
    test('limit step function should be defined', () => {
        expect(_.limitStep).toBeDefined()
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
        expect(_.limitStep).toHaveBeenCalledWith(4002)
    })
})

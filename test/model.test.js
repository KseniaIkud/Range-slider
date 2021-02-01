
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

describe('init function', () => {
    test('init function should be defined', () => {
        expect(_.init).toBeDefined()
    })
    test('should call setScale function', () => {
        _.setScale = jest.fn()
        _.init()
        expect(_.setScale).toBeCalled()
    })
})

describe('update function', () => {
    test('update function should be defined', () => {
        expect(_.update).toBeDefined()
    })
    test('new limit for range slider toggles should be set', () => {
        _.limitToggle = jest.fn()
        _.isRange = true

        _.update(5, 'default')
        expect(_.limitToggle).toBeCalledWith(5, 'default')
        
        _.update(500, 'right')
        expect(_.limitToggle).toHaveBeenCalled()
    })
    test('new step limit for single hangle slider should be set', () => {
        _.limitStep = jest.fn()
        _.isRange = false

        _.update( 4002, "default")
        expect(_.limitStep).toHaveBeenCalledWith(4002)
    })
})

describe('set scale function', () => {
    test('setScale function should be defined', () => {
        expect(_.setScale).toBeDefined()
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
})
import {Form} from '../../src/mvc/subViews'

const _ = new Form()

describe('setInputValue function for slider with one handle', () => {
    _.init(document.body, false, 0, 100)
    test('default value should be set to 20', () => {
        _.setInputValue(false, 20)
        expect(_.defaultInput.value).toBe('20')
    })
    test('default value should be set to 0', () => {
        _.setInputValue(false, 0)
        expect(_.defaultInput.value).toBe('0')
    })
})
describe('setInputValue function for slider with two handles', () => {
    _.init(document.body, true, -200, 100)
    test('left value should be set to -100, right to 0', () => {
        _.setInputValue(true, -100, 0)
        expect(_.defaultInput.value).toBe('-100')
        expect(_.rightInput.value).toBe('0')
    })
})


describe('init function', () => {
    test('init function should be defined', () => {
        expect(_.init).toBeDefined()
    })
    test('setMin function should be called', () => {
        _.setMin = jest.fn()
        _.init(document.body, true, 0, 10)
        expect(_.setMin).toHaveBeenCalledWith(true, 0)
    })
    test('if no second argument for setMax, it should be called with 100', () => {
        _.setMax(false)
        expect(_.defaultInput.max).toBe('100')
    })
    test('setMax function should be called', () => {
        _.setMax = jest.fn()
        _.init(document.body, true, 0, 10)
        expect(_.setMax).toHaveBeenCalledWith(true, 10)
    })
    test('createInput function should be called', () => {
        _.createInput = jest.fn()
        _.init(document.body, true, 0, 10)
        expect(_.createInput).toHaveBeenCalledWith(true)
    })
    test('createForm function should be called', () => {
        _.createForm = jest.fn()
        _.init(document.body, true, 0, 10)
        expect(_.createForm).toHaveBeenCalledWith(document.body)
    })
})

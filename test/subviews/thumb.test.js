import {Thumb} from '../../src/mvc/subViews'

const _ = new Thumb()

describe('setThumbValue', () => {
    test('should not do anything', () => {
        _.setThumbValue(false, 2)
        expect(_.thumbOutput).toBeUndefined
    })
    test('thumb value should be 50', () => {
        _.createThumbElement(false, document.body)
        _.setThumbValue(false, 50)
        expect(_.thumbOutput.textContent).toBe('50')
    })
    test('thumb values should be -200 and 0', () => {
        _.createThumbElement(true, document.body, document.body)
        _.setThumbValue(true, -200, 0)
        expect(_.thumbOutput.textContent).toBe('-200')
        expect(_.thumbOutputRight.textContent).toBe('0')
    })
})

describe('createThumbElement', () => {
    test('one thumb should be created', () => {
        let createElementMock = jest.spyOn(document, "createElement")
        jest.clearAllMocks()
        _.createThumbElement(false, document.body)
        expect(document.createElement).toHaveBeenCalledTimes(1);
        createElementMock.mockRestore()
    })
    test('two thumbs should be created', () => {
        let createElementMock = jest.spyOn(document, "createElement")
        jest.clearAllMocks()
        _.createThumbElement(true, document.body, document.body)
        expect(document.createElement).toHaveBeenCalledTimes(2);
        createElementMock.mockRestore()
    })
})

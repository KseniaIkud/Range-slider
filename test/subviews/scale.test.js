import {Scale} from '../../src/mvc/view/scale'

const _ = new Scale()

describe('createScale function', () => {
    test('new element should be created', () => {
        let mock = jest.spyOn(document, "createElement")
        _.createScale([1, 2, 3])
        expect(document.createElement).toHaveBeenCalled();
        mock.mockRestore()
    })
    test('6 elements should be created (for every value and for scale itself)', () => {
        let mock = jest.spyOn(document, "createElement")
        _.createScale([1, 2, 3, 4, 5])
        expect(document.createElement).toHaveBeenCalledTimes(6)
        mock.mockRestore()
    })
})
describe('placeScale function', () => {
    test('scale position should adapt to different wrapper width', () => {
        let x = 450
        expect(_.placeScale(x)).toBe((0.42 * x + 777.8) / x)
    })
})
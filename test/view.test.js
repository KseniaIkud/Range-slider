import {View} from '../src/mvc/view/view';
import {Slider} from '../src/mvc/view/slider';
import {Track} from '../src/mvc/view/track';
import {ProgressBar} from '../src/mvc/view/progressBar';
import {Thumb} from '../src/mvc/view/thumb';
import {Scale} from '../src/mvc/view/scale'
let _ = new View(document.body, Slider, Track, ProgressBar, Thumb, Scale)


describe('init function', () => {
    test('init function should be defined', () => {
        expect(_.init).toBeDefined
    })
})
describe('subscribe function', () => {
    test('ExpController should be in the observers array', () => {
        class ExpController { }
        _.subscribe(ExpController)
        expect(_.observers).toEqual(expect.arrayContaining([ExpController]))
    })
    
})
describe('createWrapper function', () => {
    test('new element should be created', () => {
        let mock = jest.spyOn(document, "createElement")
        _.createWrapper()
        expect(document.createElement).toHaveBeenCalledTimes(1);
        mock.mockRestore()
    })
    test('the new element should be added to DOM', () => {
        jest.spyOn(_.parent, "append")
        _.createWrapper()
        expect(_.parent.append).toHaveBeenCalledTimes(1)
    })
    test('setAttributesValue should be called', () => {
        jest.spyOn(_, 'setAttributesValue')
        _.createWrapper()
        expect(_.setAttributesValue).toHaveBeenCalledTimes(1)
    })
})
describe('setAttributesValue function', () => {
    describe('single range slider', () => {
        beforeAll(() => {
            _.options = {
                ..._.options,
                defaultValue: -100,
                isRange: false
                
            }
        })
        test('default-value should be -100', () => {
            _.setAttributesValue()
            expect(_.wrapper.getAttribute("default-value")).toBe('-100')
        })
    })
    describe('double range slider', () => {
        beforeAll(() => {
            _.options = {
                ..._.options,
                isRange: true,
                defaultValue: 10,
                rightValue: 40
            }
        })
        test('left-value should be 10', () => {
            _.setAttributesValue()
            expect(_.wrapper.getAttribute("left-value")).toBe('10')
        })
        test('right-value should be 40', () => {
            _.setAttributesValue()
            expect(_.wrapper.getAttribute("right-value")).toBe('40')
        })
    })
})
// describe('createScale function', () => {
//     test('new element should be created', () => {
//         let mock = jest.spyOn(document, "createElement")
//         _.createScale()
//         expect(document.createElement).toHaveBeenCalledTimes(1);
//         mock.mockRestore()
//     })
//     test('scale element should have className range-slider__scale', () => {
//         expect(_.wrapper.firstChild.classList.contains('range-slider__scale')).toBe(true)
//     })
//     test('the element should be added inside wrapper', () => {
//         let mock = jest.spyOn(_.wrapper, "append")
//         _.createScale()
//         expect(_.wrapper.append).toHaveBeenCalledTimes(1)
//         mock.mockRestore()
//     })
//     test('4 elements should be created (for every value and for scale itself)', () => {
//         _.options = {
//             ..._.options,
//             scaleValues: [1, 2, 3]
//         }
//         let mock = jest.spyOn(document, "createElement")
//         _.createScale()
//         expect(document.createElement).toHaveBeenCalledTimes(4)
//         mock.mockRestore()
//     })
// })
// describe('placeScale function', () => {
//     test('scale position should adapt to different wrapper width', () => {
//         let x = 450
//         expect(_.placeScale(x)).toBe((0.42 * x + 777.8) / x)
//     })
// })
import {Controller} from '../src/mvc/controller'
import {Model} from '../src/mvc/model'
import {View} from '../src/mvc/view/view';
import {Slider} from '../src/mvc/view/slider';
import {Track} from '../src/mvc/view/track';
import {ProgressBar} from '../src/mvc/view/progressBar';
import {Thumb} from '../src/mvc/view/thumb';
import {Scale} from '../src/mvc/view/scale'

const _ = new Controller(
    new Model({}), 
    new View(
        document.body, 
        new Slider(), 
        new Track(),
        new ProgressBar(),
        new Thumb(),
        new Scale()
    )
)

describe('init function', () => {
    test('init function should be defined', () => {
        expect(_.init).toBeDefined()
    })
    test('init function for model should be called', () => {
        _.model.init = jest.fn()
        _.init()
        expect(_.model.init).toBeCalled()
    })
    test('view should receive data from model', () => {
        let data = {
            min: 0,
            max: 100,
            defaultValue: 11,
            rightValue: 23,
            isRange: true,
            rightProgressBar: false,
            overThumbElement: true,
            isVertical: true,
            isScale: true,
            scaleValues: [0, 50, 100]
        }
        _.model.dataForView = data
        _.init()
        expect(_.view.options).toEqual(data)
    })
    test('init function for view should be called', () => {
        _.view.init = jest.fn()
        _.init()
        expect(_.view.init).toBeCalled()
    })
    test('controller should be subscribed for model', () => {
        _.model.subscribe = jest.fn()
        _.init()
        expect(_.model.subscribe).toHaveBeenCalledWith(_)
    })
    test('controller should be subscribed for view', () => {
        _.view.subscribe = jest.fn()
        _.init()
        expect(_.view.subscribe).toHaveBeenCalledWith(_)
    })
})

describe('update model function', () => {
    test('updateModel function should be defined', () => {
        expect(_.updateModel).toBeDefined()
        _.model.update = jest.fn()
        _.updateModel('')
    })
    test('update function should be called for model with arguments 10 and default', () => {
        _.model.update = jest.fn()
        _.updateModel(10, 'default')
        expect(_.model.update).toHaveBeenCalledWith(10, 'default')
    })
    test('update function should be called for model with arguments -1001 and right', () => {
        _.model.update = jest.fn()
        _.updateModel(-1001, 'right')
        expect(_.model.update).toHaveBeenCalledWith(-1001, 'right')
    })
})
describe('update view function', () => {
    test('updateView function should be defined', () => {
        expect(_.updateView).toBeDefined()
    })
    test('default (left or single) value for view should be update with new value 42', () => {
        _.model.defaultValue = 42
        _.updateView()
        expect(_.view.options.defaultValue).toBe(42)
    })
    test('default (left or single) value for view should be update with new value 0', () => {
        _.model.defaultValue = 0
        _.updateView()
        expect(_.view.options.defaultValue).toBe(0)
    })
    test('right value for view should be update with new value 0', () => {
        _.model.rightValue = 0
        _.updateView()
        expect(_.view.options.rightValue).toBe(0)
    })
    test('right value for view should be update with new value -100', () => {
        _.model.rightValue = -100
        _.updateView()
        expect(_.view.options.rightValue).toBe(-100)
    })
    test('view function setInput should be called', () => {
        _.view.setInput = jest.fn()
        _.updateView()
        expect(_.view.setInput).toBeCalled()
    })
})
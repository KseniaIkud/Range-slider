import {Form, Styles, ProgressBar, Thumb} from '../src/mvc/subViews.ts'
import {Controller} from '../src/mvc/controller'
import {Model} from '../src/mvc/model'
import {View} from '../src/mvc/view'
const _ = new Controller(
    new Model({}), 
    new View(
        document.body, 
        new Form(), 
        new Styles(),
        new ProgressBar(),
        new Thumb()
    )
)

describe('init function', () => {
    test('init function should be defined', () => {
        expect(_.init).toBeDefined()
    })
})
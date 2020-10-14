import {View} from '../src/mvc/view'

it('defined', () => {
    const view = new View({})
    expect(view.init).toBeDefined()
})
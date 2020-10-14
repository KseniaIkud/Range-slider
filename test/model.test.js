
import {Model} from '../src/mvc/model'

it('defined', () => {
    const model = new Model({})
    expect(model.update).toBeDefined()
})

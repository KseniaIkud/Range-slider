const Model = require('./modelII')

it('defined', () => {
    const model = new Model({})
    expect(model.sum).toBeDefined()
})
import {Track} from '../../src/mvc/view/track'

const _ = new Track()

describe('init function', () => {
    test('init function should call createStyles and createTruck functions', () => {
        jest.spyOn(_, "createStyles")
        jest.spyOn(_, "createTrack")
        _.init(document.body)
        expect(_.createStyles).toHaveBeenCalledWith(document.body)
        expect(_.createTrack).toHaveBeenCalled()
    })
})
describe('createStyle function', () => {
    test('new element should be created', () => {
        jest.spyOn(document, "createElement")
        _.createStyles(document.body)
        expect(document.createElement).toHaveBeenCalled()
    })
})
describe('createTrack function', () => {
    test('new element should be created', () => {
        jest.spyOn(document, "createElement")
        _.createTrack()
        expect(document.createElement).toHaveBeenCalled()
    })
})
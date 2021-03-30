import {ProgressBar} from '../../src/mvc/subViews'

const _ = new ProgressBar()

describe('set progress bar right', () => {
    _.createProgressBar(document.body)
    test('left border should be set to 20%', () => {
        _.setRight(20)
        expect(_.bar.style.left).toEqual('20%')
    })
    test('right border should be set to -1px', () => {
        _.setRight(1000)
        expect(_.bar.style.right).toEqual('-1px')
    })
})
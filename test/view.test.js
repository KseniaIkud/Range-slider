import View from '../src/mvc/view/view';
import Slider from '../src/mvc/view/slider';
import Track from '../src/mvc/view/track';
import ProgressBar from '../src/mvc/view/progressBar';
import Thumb from '../src/mvc/view/thumb';
import Scale from '../src/mvc/view/scale';

const testView = new View(document.body, Slider, Track, ProgressBar, Thumb, Scale);

describe('init function', () => {
//   test('init function should be defined', () => {
//     expect(testView.init).toBeDefined;
//   });
});
describe('subscribe function', () => {
  test('ExpController should be in the observers array', () => {
    class ExpController { }
    testView.subscribe(ExpController);
    expect(testView.observers).toEqual(expect.arrayContaining([ExpController]));
  });
});
describe('createWrapper function', () => {
  test('new element should be created', () => {
    const mock = jest.spyOn(document, 'createElement');
    testView.createWrapper();
    expect(document.createElement).toHaveBeenCalledTimes(1);
    mock.mockRestore();
  });
  test('the new element should be added to DOM', () => {
    jest.spyOn(testView.parent, 'append');
    testView.createWrapper();
    expect(testView.parent.append).toHaveBeenCalledTimes(1);
  });
  test('setAttributesValue should be called', () => {
    jest.spyOn(testView, 'setAttributesValue');
    testView.createWrapper();
    expect(testView.setAttributesValue).toHaveBeenCalledTimes(1);
  });
});
describe('setAttributesValue function', () => {
  describe('single range slider', () => {
    beforeAll(() => {
      testView.options = {
        ...testView.options,
        defaultValue: -100,
        isRange: false,

      };
    });
    test('default-value should be -100', () => {
      testView.setAttributesValue();
      expect(testView.wrapper.getAttribute('default-value')).toBe('-100');
    });
  });
  describe('double range slider', () => {
    beforeAll(() => {
      testView.options = {
        ...testView.options,
        isRange: true,
        defaultValue: 10,
        rightValue: 40,
      };
    });
    test('left-value should be 10', () => {
      testView.setAttributesValue();
      expect(testView.wrapper.getAttribute('left-value')).toBe('10');
    });
    test('right-value should be 40', () => {
      testView.setAttributesValue();
      expect(testView.wrapper.getAttribute('right-value')).toBe('40');
    });
  });
});

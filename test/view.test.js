import View from '../src/mvc/view/view';
import Slider from '../src/mvc/view/slider';
import Track from '../src/mvc/view/track';
import ProgressBar from '../src/mvc/view/progressBar';
import Thumb from '../src/mvc/view/thumb';
import Scale from '../src/mvc/view/scale';

const testView = new View(document.body, new Slider(), new Track(),
  new ProgressBar(), new Thumb(), new Scale());
beforeAll(() => {
  testView.init();
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
describe('getValueByCoords function', () => {
  test('should work with horizontal slider', () => {
    testView.options = {
      min: 0,
      max: 60,
      isVertical: false,
    };
    const coords = {
      left: 737,
      right: 1339,
    };
    const element = new MouseEvent('click');
    element.pageX = 864;
    expect(testView.getValueByCoords(element, coords)).toBe(13);
  });
  test('should work with vertical slider', () => {
    testView.options = {
      min: 100,
      max: 1000,
      isVertical: true,
    };
    const coords = {
      bottom: 516,
      top: 114,
    };
    const element = new MouseEvent('click');
    element.pageY = 265;
    expect(testView.getValueByCoords(element, coords)).toBe(438);
  });
});
describe('click on bar event', () => {
  test('should call eventClick with newValue', () => {
    testView.getValueByCoords = jest.fn();
    testView.eventClick = jest.fn();
    testView.clickOnBar();
    expect(testView.getValueByCoords).toHaveBeenCalled();
    expect(testView.eventClick).toHaveBeenCalled();
  });
});

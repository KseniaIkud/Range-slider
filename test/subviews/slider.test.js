import Slider from '../../src/mvc/view/slider';

const testSlider = new Slider();

describe('setInputValue function for slider with one handle', () => {
  testSlider.init(document.body, false, 0, 100);
  test('default value should be set to 20', () => {
    testSlider.setInputValue(false, 20);
    expect(testSlider.defaultInput.value).toBe('20');
  });
  test('default value should be set to 0', () => {
    testSlider.setInputValue(false, 0);
    expect(testSlider.defaultInput.value).toBe('0');
  });
});
describe('setInputValue function for slider with two handles', () => {
  testSlider.init(document.body, true, -200, 100);
  test('left value should be set to -100, right to 0', () => {
    testSlider.setInputValue(true, -100, 0);
    expect(testSlider.defaultInput.value).toBe('-100');
    expect(testSlider.rightInput.value).toBe('0');
  });
});

describe('init function', () => {
  test('init function should be defined', () => {
    expect(testSlider.init).toBeDefined();
  });
  test('setMin function should be called', () => {
    testSlider.setMin = jest.fn();
    testSlider.init(document.body, true, 0, 10);
    expect(testSlider.setMin).toHaveBeenCalledWith(true, 0);
  });
  test('if no second argument for setMax, it should be called with 100', () => {
    testSlider.setMax(false);
    expect(testSlider.defaultInput.max).toBe('100');
  });
  test('setMax function should be called', () => {
    testSlider.setMax = jest.fn();
    testSlider.init(document.body, true, 0, 10);
    expect(testSlider.setMax).toHaveBeenCalledWith(true, 10);
  });
  test('createInput function should be called', () => {
    testSlider.createInput = jest.fn();
    testSlider.init(document.body, true, 0, 10);
    expect(testSlider.createInput).toHaveBeenCalledWith(true);
  });
  test('createForm function should be called', () => {
    testSlider.createForm = jest.fn();
    testSlider.init(document.body, true, 0, 10);
    expect(testSlider.createForm).toHaveBeenCalledWith(document.body);
  });
});

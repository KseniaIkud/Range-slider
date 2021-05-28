import Slider from '../../src/mvc/view/slider';

describe('slider test', () => {
  let slider;
  let createRangeSlider;
  beforeEach(() => {
    slider = new Slider();
    slider.init(document.body, false, 0, 100);
    createRangeSlider = () => {
      document.body.innerHTML = '';
      slider.init(document.body, true, -200, 100);
    };
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  test('default value set correct', () => {
    slider.setInputValue(false, 20);
    expect(slider.defaultInput.value).toBe('20');
  });
  test('default value might be zero', () => {
    slider.setInputValue(false, 0);
    expect(slider.defaultInput.value).toBe('0');
  });
  test('values set for range slider', () => {
    createRangeSlider();
    slider.setInputValue(true, -100, 0);
    expect(slider.defaultInput.value).toBe('-100');
    expect(slider.rightInput.value).toBe('0');
  });
  test('min and max set for single range slider', () => {
    slider.setMin(false, 20);
    expect(slider.defaultInput.min).toBe('20');
    slider.setMax(false, 50);
    expect(slider.defaultInput.max).toBe('50');
  });
  test('min and max set for double range slider', () => {
    createRangeSlider();
    slider.setMin(true, 0);
    expect(slider.defaultInput.min).toBe('0');
    expect(slider.rightInput.min).toBe('0');
    slider.setMax(true, undefined);
    // 100 by default
    expect(slider.defaultInput.max).toBe('100');
    expect(slider.rightInput.max).toBe('100');
  });
});

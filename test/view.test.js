import View from '../src/mvc/view/view';
import Slider from '../src/mvc/view/slider';
import ProgressBar from '../src/mvc/view/progressBar';
import Thumb from '../src/mvc/view/thumb';
import Scale from '../src/mvc/view/scale';

describe('test View', () => {
  let view;
  beforeEach(() => {
    view = new View(document.body, new Slider(),
      new ProgressBar(), new Thumb(), new Scale());
    view.init();
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  test('wrapper created', () => {
    jest.spyOn(document, 'createElement');
    view.createWrapper();
    expect(document.createElement).toHaveBeenCalledTimes(1);
    jest.spyOn(view.parent, 'append');
    view.createWrapper();
    expect(view.parent.append).toHaveBeenCalledTimes(1);
  });
  test('attributes set for single slider', () => {
    view.options = {
      ...view.options,
      defaultValue: -100,
      isRange: false,
    };
    view.setAttributesValue();
    expect(view.wrapper.getAttribute('default-value')).toBe('-100');
  });
  test('attributes set for double slider', () => {
    view.options = {
      ...view.options,
      isRange: true,
      defaultValue: 10,
      rightValue: 40,
    };
    view.setAttributesValue();
    expect(view.wrapper.getAttribute('left-value')).toBe('10');
    expect(view.wrapper.getAttribute('right-value')).toBe('40');
  });
  test('values for horizontal slider received from coordinates', () => {
    view.options = {
      ...view.options,
      min: 0,
      max: 60,
      isVertical: false,
    };
    const coords = {
      left: 737,
      right: 1339,
      width: 602,
    };
    const element = new MouseEvent('click', { clientX: 864 });
    expect(view.getValueByCoords(element, coords)).toBe(13);
  });
  test('values for vertical slider received from coordinates', () => {
    view.options = {
      ...view.options,
      min: 100,
      max: 1000,
      isVertical: true,
    };
    const coords = {
      bottom: 516,
      top: 114,
      height: 402,
    };
    const element = new MouseEvent('click', { clientY: 265 });
    expect(view.getValueByCoords(element, coords)).toBe(438);
  });
  test('mousedown on ProgressBar should call clickOnBar function', () => {
    jest.spyOn(view, 'clickOnBar');
    view.progressBar.bar.dispatchEvent(new MouseEvent('mousedown'));
    expect(view.clickOnBar).toHaveBeenCalled();
  });
  test('mousedown on Track should call clickOnBar function', () => {
    jest.spyOn(view, 'clickOnBar');
    view.track.dispatchEvent(new MouseEvent('mousedown'));
    expect(view.clickOnBar).toHaveBeenCalled();
  });
  test('default value changed by click', () => {
    view.options = {
      ...view.options,
      isRange: false,
    };
    view.onClick(5)();
    expect(view.options.defaultValue).toBe(5);
  });
  test('left and right valus changed by click', () => {
    view.options = {
      ...view.options,
      isRange: true,
      rightValue: 80,
      defaultValue: 0,
    };
    view.onClick(75)();
    expect(view.options.rightValue).toBe(75);
    expect(view.options.defaultValue).toBe(0);
  });
  test('input event call update method with default settings', () => {
    jest.spyOn(view, 'update');
    view.onInput(true)();
    const value = Number(view.form.defaultInput.value);
    expect(view.update).toHaveBeenCalledWith(value, true);
  });
  test('input event call update method with settings for right thumb', () => {
    jest.spyOn(view, 'update');
    view.onInput(false)();
    const value = Number(view.form.rightInput.value);
    expect(view.update).toHaveBeenCalledWith(value, false);
  });
  test('progress bar set on right', () => {
    view.options = {
      ...view.options,
      isRange: false,
      rightProgressBar: true,
    };
    jest.spyOn(view.progressBar, 'setRight');
    view.setInput();
    expect(view.progressBar.setRight).toHaveBeenCalled();
  });
  test('should toggle class for thumb when mouse over or out', () => {
    const { thumbDefault } = view.thumb;
    jest.spyOn(thumbDefault.classList, 'toggle');
    view.onMouseOverOut(thumbDefault)();
    expect(thumbDefault.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_hover');
  });
  test('should toggle class for thumb element when mouse over or out', () => {
    view.options = {
      ...view.options,
      overThumbElement: true,
    };
    const { thumbOutput } = view.thumb;
    jest.spyOn(thumbOutput.classList, 'toggle');
    view.onMouseOverOut(view.thumb.thumbDefault, thumbOutput)();
    expect(thumbOutput.classList.toggle).toHaveBeenCalledWith('range-slider__value-thumb_big');
  });
  test('should toggle class for default thumb when mouse up or down', () => {
    const { thumbDefault } = view.thumb;
    jest.spyOn(thumbDefault.classList, 'toggle');
    view.onMouseUpDown(true)();
    expect(thumbDefault.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_active');
  });
  test('should toggle class for right thumb when mouse up or down', () => {
    const { thumbRight } = view.thumb;
    jest.spyOn(thumbRight.classList, 'toggle');
    view.onMouseUpDown(false)();
    expect(thumbRight.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_active');
  });
  test('subscriber updated data', () => {
    view.options = {
      ...view.options,
      isRange: true,
      rightValue: 100,
      defaultValue: 0,
    };
    const observer = {
      updateModel(newValue, isDefault) {
        if (isDefault) {
          return newValue;
        }
        return newValue;
      },
    };
    view.subscribe(observer);
    jest.spyOn(view.observers[0], 'updateModel');
    view.onClick(35)();
    expect(view.observers[0].updateModel).toHaveBeenCalledWith(35, true);
  });
});

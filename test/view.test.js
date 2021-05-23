import View from '../src/mvc/view/view';
import Slider from '../src/mvc/view/slider';
import ProgressBar from '../src/mvc/view/progressBar';
import Thumb from '../src/mvc/view/thumb';
import Scale from '../src/mvc/view/scale';

const viewTest = new View(document.body, new Slider(),
  new ProgressBar(), new Thumb(), new Scale());

describe('createWrapper function', () => {
  test('new element should be created', () => {
    jest.spyOn(document, 'createElement');
    viewTest.createWrapper();
    expect(document.createElement).toHaveBeenCalledTimes(1);
  });
  test('the new element should be added to DOM', () => {
    jest.spyOn(viewTest.parent, 'append');
    viewTest.createWrapper();
    expect(viewTest.parent.append).toHaveBeenCalledTimes(1);
  });
});
describe('setAttributesValue function', () => {
  describe('single range slider', () => {
    beforeAll(() => {
      viewTest.options = {
        ...viewTest.options,
        defaultValue: -100,
        isRange: false,

      };
    });
    test('default-value should be -100', () => {
      viewTest.setAttributesValue();
      expect(viewTest.wrapper.getAttribute('default-value')).toBe('-100');
    });
  });
  describe('double range slider', () => {
    beforeAll(() => {
      viewTest.options = {
        ...viewTest.options,
        isRange: true,
        defaultValue: 10,
        rightValue: 40,
      };
    });
    test('left-value should be 10', () => {
      viewTest.setAttributesValue();
      expect(viewTest.wrapper.getAttribute('left-value')).toBe('10');
    });
    test('right-value should be 40', () => {
      viewTest.setAttributesValue();
      expect(viewTest.wrapper.getAttribute('right-value')).toBe('40');
    });
  });
});
describe('getValueByCoords function', () => {
  test('should work with horizontal slider', () => {
    viewTest.options = {
      ...viewTest.options,
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
    expect(viewTest.getValueByCoords(element, coords)).toBe(13);
  });
  test('should work with vertical slider', () => {
    viewTest.options = {
      ...viewTest.options,
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
    expect(viewTest.getValueByCoords(element, coords)).toBe(438);
  });
});
describe('mousedown', () => {
  beforeAll(() => {
    viewTest.init();
  });
  test('mousedown on ProgressBar should call clickOnBar function', () => {
    jest.spyOn(viewTest, 'clickOnBar');
    viewTest.progressBar.bar.dispatchEvent(new MouseEvent('mousedown'));
    expect(viewTest.clickOnBar).toHaveBeenCalled();
  });
  test('mousedown on Track should call clickOnBar function', () => {
    jest.spyOn(viewTest, 'clickOnBar');
    viewTest.track.dispatchEvent(new MouseEvent('mousedown'));
    expect(viewTest.clickOnBar).toHaveBeenCalled();
  });
});
describe('onClick function', () => {
  test('default value should be rewritten', () => {
    viewTest.options = {
      ...viewTest.options,
      isRange: false,
    };
    viewTest.onClick(5)();
    expect(viewTest.options.defaultValue).toBe(5);
  });
  test('right value should be rewritten', () => {
    viewTest.options = {
      ...viewTest.options,
      isRange: true,
      rightValue: 80,
      defaultValue: 0,
    };
    viewTest.onClick(75)();
    expect(viewTest.options.rightValue).toBe(75);
    expect(viewTest.options.defaultValue).toBe(0);
  });
  test('presenter should update data', () => {
    viewTest.options = {
      ...viewTest.options,
      isRange: true,
      rightValue: 100,
      defaultValue: 0,
    };
    class Presenter {
      updateModel(newValue, isDefault) {
        if (isDefault) {
          return newValue;
        }
        return newValue;
      }
    }
    const present = new Presenter();
    viewTest.subscribe(present);
    jest.spyOn(viewTest.observers[0], 'updateModel');
    viewTest.onClick(35)();
    expect(viewTest.observers[0].updateModel).toHaveBeenCalledWith(35, true);
  });
});
describe('input events', () => {
  beforeAll(() => {
    viewTest.init();
  });
  test('onInput return callback should call update function with true', () => {
    jest.spyOn(viewTest, 'update');
    viewTest.onInput(true)();
    const value = Number(viewTest.form.defaultInput.value);
    expect(viewTest.update).toHaveBeenCalledWith(value, true);
  });
  test('onInput return callback should call update function with false', () => {
    jest.spyOn(viewTest, 'update');
    viewTest.onInput(false)();
    const value = Number(viewTest.form.defaultInput.value);
    expect(viewTest.update).toHaveBeenCalledWith(value, false);
  });
});
describe('setInput function', () => {
  test('should set progress bar on right', () => {
    viewTest.options = {
      ...viewTest.options,
      isRange: false,
      rightProgressBar: true,
    };
    jest.spyOn(viewTest.progressBar, 'setRight');
    viewTest.setInput();
    expect(viewTest.progressBar.setRight).toHaveBeenCalled();
  });
});
describe('onMouseOverOut', () => {
  test('should toggle class for thumb', () => {
    const { thumbDefault } = viewTest.thumb;
    jest.spyOn(thumbDefault.classList, 'toggle');
    viewTest.onMouseOverOut(thumbDefault)();
    expect(thumbDefault.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_hover');
  });
  test('should toggle class for thumbOut', () => {
    viewTest.options = {
      ...viewTest.options,
      overThumbElement: true,
    };
    const { thumbOutput } = viewTest.thumb;
    jest.spyOn(thumbOutput.classList, 'toggle');
    viewTest.onMouseOverOut(viewTest.thumb.thumbDefault, thumbOutput)();
    expect(thumbOutput.classList.toggle).toHaveBeenCalledWith('range-slider__value-thumb_big');
  });
});
describe('onMouseUpDown', () => {
  test('should toggle class for thumbDefault', () => {
    const { thumbDefault } = viewTest.thumb;
    jest.spyOn(thumbDefault.classList, 'toggle');
    viewTest.onMouseUpDown(true)();
    expect(thumbDefault.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_active');
  });
  test('should toggle class for thumbRight', () => {
    const { thumbRight } = viewTest.thumb;
    jest.spyOn(thumbRight.classList, 'toggle');
    viewTest.onMouseUpDown(false)();
    expect(thumbRight.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_active');
  });
});
